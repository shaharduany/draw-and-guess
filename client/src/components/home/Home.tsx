import React, { MouseEvent } from "react";

const Home: React.FC = () => {
	
	const readyClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		
	};

	return (
		<div>
			<label>Press ready when you're ready</label>
			<button onClick={readyClickHandler}>READY</button>
		</div>
	);
};

export default Home;
