import React, { MouseEvent } from "react";
import store from "../../store/root";
import { sendReady } from "../../store/socket-reducer";

const Home: React.FC = () => {

	const readyClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		store.dispatch(sendReady());
	};

	return (
		<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>
	);
};

export default Home;
