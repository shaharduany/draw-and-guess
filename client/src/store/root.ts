import { combineReducers } from "redux";
import player, { PlayerT } from "./player";
import playerCount, { PlayerCountT } from "./player-coumt";

export interface ReducerI {
	type: string;
}

export interface RootStateI {
	player: PlayerT;
	playerCount: PlayerCountT;
}

const rootReducer = combineReducers({
	player,
	playerCount,
});

export default rootReducer;