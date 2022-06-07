"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
class Gusser extends player_1.default {
    constructor(socket) {
        super({ name: "Guesser", socket });
    }
}
exports.default = Gusser;
