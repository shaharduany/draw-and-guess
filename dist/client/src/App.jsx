"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const socket_io_client_1 = require("socket.io-client");
const Header_1 = __importDefault(require("./components/Header"));
const Home_1 = __importDefault(require("./components/home/Home"));
const socket_reducer_1 = require("./store/socket-reducer");
const App = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    let socket = (0, socket_io_client_1.io)("localhost:4000");
    (0, react_1.useEffect)(() => {
        if (socket.connected) {
            dispatch((0, socket_reducer_1.assignSocket)(socket));
        }
    }, [socket.connected, dispatch]);
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
