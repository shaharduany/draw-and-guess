"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const redux_1 = require("redux");
const root_1 = __importDefault(require("./store/root"));
const react_redux_1 = require("react-redux");
const root = client_1.default.createRoot(document.getElementById('root'));
const store = (0, redux_1.createStore)(root_1.default);
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
