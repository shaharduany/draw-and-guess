"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const player_1 = __importDefault(require("./player"));
const player_coumt_1 = __importDefault(require("./player-coumt"));
const rootReducer = {
    player: player_1.default,
    playerCount: player_coumt_1.default,
};
const store = (0, toolkit_1.configureStore)({ reducer: rootReducer });
exports.default = store;
