import express, { Express } from "express";
import { createServer } from 'http';
import { Server as IoServer } from 'socket.io';
import GameEngine from "./lib/game-engine";

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
        this.io = new IoServer(this.httpsServer); 
        this.gameEngine = new GameEngine();
        this.middleware();
        this.routes();
    }

	middleware() {
        
    }

	routes() {
        this.io.on("connection", (socket) => {
            console.log("connected")
            
            this.gameEngine.addPlayer(socket);
            
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
		this.httpsServer.listen(this.port);
	}
}

export default Server;