"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drawer_1 = __importDefault(require("./drawer"));
const guesser_1 = __importDefault(require("./guesser"));
const player_1 = require("./player");
const word_1 = __importDefault(require("./word"));
class GameEngine {
    constructor() {
        this.gussers = [];
        this.drawer = undefined;
        GameEngine.players = 0;
        this.wordGenerator = new word_1.default();
        this.word = this.wordGenerator.choice;
    }
    addPlayer(socket) {
        if (typeof this.drawer === "undefined") {
            this.drawer = new drawer_1.default(socket);
        }
        else {
            this.gussers.push(new guesser_1.default(socket));
        }
        GameEngine.players++;
        console.log(GameEngine.players);
    }
    removePlayer(socket) {
        if (this.drawer instanceof drawer_1.default && this.drawer.socket === socket) {
            if (!this.switchTurn()) {
                this.drawer = undefined;
            }
        }
        this.gussers.filter((value, index) => value.socket !== socket);
        GameEngine.players--;
    }
    startGame() {
        if (this.drawer !== undefined) {
            this.sendUpdate(this.drawer.socket, player_1.PubSub.Publisher);
        }
        this.gussers.map((value) => this.sendUpdate(value.socket));
    }
    sendUpdate(socket, role = player_1.PubSub.Subscriber) {
        let message = GameEngine.players < 2 ? "Waiting for more players" : "Game has started";
        let info = {
            players: GameEngine.players,
            role,
            message,
        };
        if (role === player_1.PubSub.Publisher) {
            info.word = this.word;
        }
        socket.emit("info", info);
    }
    switchTurn() {
        if (this.gussers.length < 1) {
            return false;
        }
        let hold = this.drawer;
        this.drawer = new drawer_1.default(this.gussers[0].socket);
        this.gussers = this.gussers.slice(1, this.gussers.length);
        if (hold instanceof drawer_1.default) {
            this.gussers.push(new guesser_1.default(hold === null || hold === void 0 ? void 0 : hold.socket));
        }
        this.wordGenerator.shuffleAWord();
        this.word = this.wordGenerator.choice;
        return true;
    }
    streamDrawing(drawing) {
        this.gussers.map((value) => {
            value.socket.emit("drawing", drawing);
        });
    }
    checkAttempt(socket, attempt) {
        if (attempt === this.word) {
            socket.emit("attempt", { message: "Correct", correct: true });
            this.switchTurn();
            this.startGame();
            return;
        }
        socket.emit("attempt", { message: "Wrong guess", correct: false });
    }
}
exports.default = GameEngine;
