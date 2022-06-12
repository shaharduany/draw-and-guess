"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const root_1 = __importDefault(require("../../store/root"));
const socket_reducer_1 = require("../../store/socket-reducer");
const Home = () => {
    const readyClickHandler = (event) => {
        event.preventDefault();
        root_1.default.dispatch((0, socket_reducer_1.sendReady)());
    };
    return (<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>);
};
exports.default = Home;
