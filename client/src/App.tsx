import React from "react";
import { io, Socket } from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/home/Home";
const App: React.FC = () => {
	let socket: Socket = io("localhost:4000");

	socket.on("connect", () => {
		console.log("connected");
	});

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
