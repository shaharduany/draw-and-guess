import express, { Express, Request, Response } from "express";
import { createServer } from 'http';
import { Server as IoServer } from 'socket.io';

class Server {
	app: Express;
	port: number | string;
    httpsServer;
    io;
    
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 4000;
        this.httpsServer = createServer(this.app);
        this.io = new IoServer(this.httpsServer); 
       
        this.middleware();
        this.paths();
    }

	middleware() {}

	paths() {
        this.io.on("connection", (socket) => {

        });
    }

	listen() {
		this.app.listen(this.port, () =>
			console.log(`server is listening on ${this.port}`)
		);
	}
}

export default Server;