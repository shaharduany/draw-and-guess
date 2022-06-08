import React from "react";
import { io, Socket } from "socket.io-client";

const App: React.FC = () => {
	let socket: Socket = io("localhost:4000");

	socket.on("connect", () => {
		console.log("connected");
	});

	return (
		<div className="App">
			<h1>Testing sockets</h1>
		</div>
	);
};

export default App;
