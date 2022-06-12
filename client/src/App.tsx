import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { setupRoutess } from "./script/routes-scripts";
import { assignSocket } from "./store/socket-reducer";

const App: React.FC = () => {
	const dispatch = useDispatch();
	let socket = io("localhost:4000");
	socket.on("connect", () => {
		console.log("here");
		dispatch(assignSocket(socket));
		setupRoutess(socket);
		socket.emit("ready");
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
