import { combineReducers } from "redux";
import { Socket } from "socket.io-client";
import player, { PlayerT } from "./player";
import playerCount, { PlayerCountT } from "./player-coumt";
import userSocket  from "./socket-reducer";

export interface ReducerI {
	type: string;
}

export interface RootStateI {
	player: PlayerT;
	playerCount: PlayerCountT;
	userSocket: Socket;
}

const rootReducer = combineReducers({
	player,
	playerCount,
	userSocket,
});

export default rootReducer;