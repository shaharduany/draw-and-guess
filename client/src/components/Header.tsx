import React, { useEffect } from "react";
import { useTypedSelector } from "../store/root";

const Header: React.FC = () => {
	const player = useTypedSelector(state => state.player);
	const playerCount = useTypedSelector(state => state.playerCount);
	return (
		<div>
			<h1>hello</h1>
			<h1>{player.role} {playerCount.count}</h1>
		</div>
	);
};

export default Header;
