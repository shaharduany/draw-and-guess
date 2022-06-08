import express, { Express } from "express";
import { createServer } from "http";
import { Server as IoServer } from "socket.io";
import GameEngine from "./lib/game-engine";
import cors from "cors";

const CLIENT_URL = "http://localhost:3000";

class Server {
	app: Express;
	port: number | string;
	httpsServer;
	io;
	gameEngine: GameEngine;

	constructor() {
		this.app = express();
		this.port = process.env.PORT || 4000;
		this.httpsServer = createServer(this.app);
		this.io = new IoServer(this.httpsServer, {
			cors: {
				origin: CLIENT_URL,
				methods: ["GET", "POST"],
			},
		});
		this.gameEngine = new GameEngine();
		this.middleware();
		this.routes();
	}

	middleware() {
		this.app.use(cors());
	}

	routes() {
		this.io.on("connection", (socket) => {
			console.log(`connected`);

			//this.gameEngine.addPlayer(socket);

			socket.on("ready", () => {
				this.gameEngine.startGame();
			});

			socket.on("draw", (drawing: Object) => {
				this.gameEngine.streamDrawing(drawing);
			});

			socket.on("guess", (attempt: string) => {
				this.gameEngine.checkAttempt(socket, attempt);
			});

			socket.on("disconnect", () => {
				this.gameEngine.removePlayer(socket);
			});
		});
	}

	listen() {
		console.log("listening");
		this.httpsServer.listen(this.port, () => {
			console.log("listening on " + this.port);
		});
	}
}

export default Server;
