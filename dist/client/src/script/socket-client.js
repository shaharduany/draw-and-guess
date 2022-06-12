"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const player_1 = require("../store/player");
class SocketClient {
    constructor() {
        SocketClient.socket = (0, socket_io_client_1.io)("localhost:4000");
        SocketClient.socket.on("connect", () => console.log("connected"));
        SocketClient.socket.on("info", (info) => {
            const newCount = info.players;
            let flag = info.role === "Publisher";
            const role = flag ? player_1.Role.drawer : player_1.Role.guesser;
        });
    }
    static emit(event, data) {
        SocketClient.socket.emit(event, data);
    }
}
exports.default = SocketClient;
