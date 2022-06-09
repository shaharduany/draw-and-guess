import React from "react";
import { useSelector } from "react-redux";
import { RootStateI } from "../store/root";

const Header: React.FC = () => {
	const player = useSelector((state: RootStateI) => state.player);

	return (
		<div>
			<h1>{player.role}</h1>
		</div>
	);
};

export default Header;
