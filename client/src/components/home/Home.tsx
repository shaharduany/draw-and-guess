import React, { MouseEvent } from "react";
import SocketClient from "../../script/socket-client";

const Home: React.FC = () => {

	const readyClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		SocketClient.emit("ready", () => console.log("sent ready"));
	};

	return (
		<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>
	);
};

export default Home;
