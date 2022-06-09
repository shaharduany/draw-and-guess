"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const Header = () => {
    const player = (0, react_redux_1.useSelector)((state) => state.player);
    return (<div>
			<h1>{player.role}</h1>
		</div>);
};
exports.default = Header;
