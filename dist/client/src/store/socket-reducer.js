"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignSocket = exports.sendReady = void 0;
function sendReady() {
    return { type: "SEND_READY" };
}
exports.sendReady = sendReady;
function assignSocket(socket) {
    return {
        type: "ASSIGN_SOCKET",
        socket: socket,
    };
}
exports.assignSocket = assignSocket;
function userSocket(state = null, action) {
    if (!state) {
        return state;
    }
    switch (action.type) {
        case "ASSIGN_SOCKET":
            state = action.socket;
            return state;
        case "SEND_READY":
            console.log("here");
            state.emit("ready");
            return state;
        default:
            return state;
    }
}
exports.default = userSocket;
