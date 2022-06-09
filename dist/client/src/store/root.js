"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const player_1 = __importDefault(require("./player"));
const player_coumt_1 = __importDefault(require("./player-coumt"));
const rootReducer = (0, redux_1.combineReducers)({
    player: player_1.default,
    playerCount: player_coumt_1.default,
});
exports.default = rootReducer;
