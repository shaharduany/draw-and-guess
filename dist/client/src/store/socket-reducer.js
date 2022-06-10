"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignSocket = exports.sendReady = void 0;
function sendReady() {
    return { type: "SEND_READY" };
}
exports.sendReady = sendReady;
function routes(socket) {
    socket.on("connect", () => console.log("connected"));
    socket.on("ready", () => console.log("ready req"));
    socket.on("attempt", () => console.log("Attempt req"));
    return socket;
}
function assignSocket(socket) {
    return {
        type: "ASSIGN_SOCKET",
        socket: socket,
    };
}
exports.assignSocket = assignSocket;
function userSocket(state, action) {
    if (typeof (state) === "undefined") {
        return undefined;
    }
    switch (action.type) {
        case "ASSIGN_SOCKET":
            state = routes(action.socket);
            return state;
        case "SEND_READY":
            return state;
        default:
            return state;
    }
}
exports.default = userSocket;
