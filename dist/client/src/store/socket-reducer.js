"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignSocket = void 0;
const socket_io_client_1 = require("socket.io-client");
const DEFAULT = (0, socket_io_client_1.io)("localhost:4000");
function assignSocket(socket) {
    return {
        type: "ASSIGN_SOCKET",
        socket: socket,
    };
}
exports.assignSocket = assignSocket;
function userSocket(state = DEFAULT, action) {
    switch (action.type) {
        case "ASSIGN_SOCKET":
            state = action.socket;
            return state;
        default:
            return state;
    }
}
exports.default = userSocket;
