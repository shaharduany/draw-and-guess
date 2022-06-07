import React, { useState } from "react";
import { io } from "socket.io-client";

function App() {
	const [message, setMessage] = useState("");
	let socket = io("http://localhost:4000");

	socket.on("connect", () => {
		setMessage("CONNECTED");
	});

	return (
		<div className="App">
      <h1>ALLLLLLLL</h1>
      <button>HELLO </button>
			<h1>{message}</h1>
		</div>
	);
}

export default App;
