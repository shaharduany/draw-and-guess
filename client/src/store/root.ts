import { configureStore } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import player, { PlayerT } from "./player";
import playerCount from "./player-coumt";
import userSocket  from "./socket-reducer";

export interface ReducerI {
	type: string;
}

export interface RootStateI {
	player: PlayerT;
	playerCount: number;
	userSocket: Socket;
}

const rootReducer = {
	player,
	playerCount,
}

const store = configureStore({ reducer: rootReducer });

export default store;
