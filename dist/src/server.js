"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const game_engine_1 = __importDefault(require("./lib/game-engine"));
const CLIENT_URL = "http://localhost:3000";
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 4000;
        this.httpsServer = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.httpsServer, {
            cors: {
                origin: CLIENT_URL,
                methods: ["GET", "POST"],
            },
        });
        this.gameEngine = new game_engine_1.default();
        this.middleware();
        this.routes();
    }
    middleware() { }
    routes() {
        this.io.on("connection", (socket) => {
            this.gameEngine.addPlayer(socket);
            socket.on("ready", () => {
                this.gameEngine.startGame();
            });
            socket.on("draw", (drawing) => {
                this.gameEngine.streamDrawing(drawing);
            });
            socket.on("guess", (attempt) => {
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
exports.default = Server;
