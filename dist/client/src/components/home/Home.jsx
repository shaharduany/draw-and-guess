"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const Home = () => {
    const socket = (0, react_redux_1.useSelector)((state) => state.userSocket);
    const readyClickHandler = (event) => {
        event.preventDefault();
        socket.emit("ready");
    };
    return (<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>);
};
exports.default = Home;
