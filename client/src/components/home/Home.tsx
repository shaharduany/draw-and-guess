import React, { MouseEvent } from "react";
import { useSelector } from "react-redux";
import { RootStateI } from "../../store/root";

const Home: React.FC = () => {
	const socket = useSelector((state: RootStateI) => state.userSocket);
	
	const readyClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		socket.emit("ready");
	};

	return (
		<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>
	);
};

export default Home;
