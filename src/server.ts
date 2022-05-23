import express, { Express, Request, Response } from "express";
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

        this.routes();
    }

	middleware() {}

	routes() {
        this.io.on("connection", (socket) => {
            this.gameEngine.addPlayer(socket);
            socket.on("disconnect", () => {
                this.gameEngine.removePlayer(socket);
            });
        });
    }

	listen() {
		this.httpsServer.listen(this.port);
	}
}

export default Server;