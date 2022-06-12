"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const socket_io_client_1 = require("socket.io-client");
const Header_1 = __importDefault(require("./components/Header"));
const Home_1 = __importDefault(require("./components/home/Home"));
const routes_scripts_1 = require("./script/routes-scripts");
const socket_reducer_1 = require("./store/socket-reducer");
const App = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    let socket = (0, socket_io_client_1.io)("localhost:4000");
    socket.on("connect", () => {
        console.log("here");
        dispatch((0, socket_reducer_1.assignSocket)(socket));
        (0, routes_scripts_1.setupRoutess)(socket);
        socket.emit("ready");
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
