"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const socket_io_client_1 = require("socket.io-client");
const Header_1 = __importDefault(require("./components/Header"));
const App = () => {
    let socket = (0, socket_io_client_1.io)("localhost:4000");
    socket.on("connect", () => {
        console.log("connected");
    });
    return (<div className="App">
			<Header_1.default />
		</div>);
};
exports.default = App;
