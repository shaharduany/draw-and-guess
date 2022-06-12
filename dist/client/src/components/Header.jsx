"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const root_1 = require("../store/root");
const Header = () => {
    const player = (0, root_1.useTypedSelector)(state => state.player);
    const playerCount = (0, root_1.useTypedSelector)(state => state.playerCount);
    return (<div>
			<h1>hello</h1>
			<h1>{player.role} {playerCount.count}</h1>
		</div>);
};
exports.default = Header;
