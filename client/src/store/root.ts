import { combineReducers } from "redux";
import player from "./player";
import playerCount from "./player-coumt";

export interface ReducerI {
	type: string;
}

const rootReducer = combineReducers({
	player,
	playerCount,
});

export default rootReducer;