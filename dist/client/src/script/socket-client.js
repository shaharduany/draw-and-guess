"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const player_1 = require("../store/player");
const player_coumt_1 = require("../store/player-coumt");
const root_1 = __importDefault(require("../store/root"));
class SocketClient {
    constructor() {
        SocketClient.socket = (0, socket_io_client_1.io)("localhost:4000");
        SocketClient.socket.on("connect", () => console.log("connected"));
        SocketClient.socket.on("info", (info) => {
            const newCount = info.players;
            let flag = info.role === "publisher";
            const role = flag ? player_1.Role.drawer : player_1.Role.guesser;
            console.log(info);
            root_1.default.dispatch((0, player_coumt_1.updateCount)(newCount));
            root_1.default.dispatch((0, player_1.updateRole)(role));
            if (flag) {
                root_1.default.dispatch((0, player_1.updateWord)(info.word));
            }
        });
    }
    static emit(event, data) {
        SocketClient.socket.emit(event, data);
    }
}
exports.default = SocketClient;
