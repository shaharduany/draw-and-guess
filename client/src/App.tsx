import React from "react";
import { io, Socket } from "socket.io-client";
import Header from './components/Header';
const App: React.FC = () => {
	let socket: Socket = io("localhost:4000");

	socket.on("connect", () => {
		console.log("connected");
	});

	return (
		<div className="App">
			<Header />
		</div>
	);
};

export default App;
