"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutess = void 0;
const player_1 = require("../store/player");
const player_coumt_1 = require("../store/player-coumt");
const root_1 = __importDefault(require("../store/root"));
function setupRoutess(socket) {
    socket.on("connect", () => console.log("connected"));
    socket.on("ready", (info) => {
        let playersInfo = info.players;
        let role = (info.role === "Publisher") ? player_1.Role.drawer : player_1.Role.guesser;
        console.log(info.message);
        root_1.default.dispatch((0, player_coumt_1.updateCount)(playersInfo));
        root_1.default.dispatch((0, player_1.changeRole)(role));
    });
    socket.on("attempt", (attempt) => console.log("Attempt req"));
}
exports.setupRoutess = setupRoutess;
