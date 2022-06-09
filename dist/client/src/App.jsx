"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const socket_io_client_1 = require("socket.io-client");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const Home_1 = __importDefault(require("./components/home/Home"));
const App = () => {
    let socket = (0, socket_io_client_1.io)("localhost:4000");
    socket.on("connect", () => {
        console.log("connected");
    });
    return (<div className="App">
			<react_router_dom_1.BrowserRouter>
				<Header_1.default />
				<react_router_dom_1.Routes>
					<react_router_dom_1.Route path="/" element={<Home_1.default />}/>
					<react_router_dom_1.Route path="/pick-a-word/" element={<h1>Build it</h1>}/>
					<react_router_dom_1.Route path="/draw" element={<h1>bla</h1>}/>
					<react_router_dom_1.Route path="/guess" element={<h1>....</h1>}/>
				</react_router_dom_1.Routes>
			</react_router_dom_1.BrowserRouter>
		</div>);
};
exports.default = App;
