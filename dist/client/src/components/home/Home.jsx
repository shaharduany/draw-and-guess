"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home = () => {
    const readyClickHandler = (event) => {
        event.preventDefault();
    };
    return (<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>);
};
exports.default = Home;
