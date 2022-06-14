import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
import SocketClient from "./script/socket-client";

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pick-a-word/" element={<h1>Build it</h1>} />
					<Route path="/draw" element={<h1>bla</h1>} />
					<Route path="/guess" element={<h1>....</h1>} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
