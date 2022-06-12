"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTypedSelector = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const player_1 = __importDefault(require("./player"));
const player_coumt_1 = __importDefault(require("./player-coumt"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        player: player_1.default,
        playerCount: player_coumt_1.default
    }
});
exports.useTypedSelector = react_redux_1.useSelector;
exports.default = store;
