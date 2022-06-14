import React, { useEffect } from "react";
import { useTypedSelector } from "../store/root";

const Header: React.FC = () => {
	const player = useTypedSelector(state => state.player);
	const playerCount = useTypedSelector(state => state.playerCount);
	let word = "";
	if(player.word){
		word = player.word;
	}

	return (
		<div>
			<h1>{player.role} {playerCount.count} {word && word}</h1>
		</div>
	);
};

export default Header;
