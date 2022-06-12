import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import player, { PlayerT } from "./player";
import playerCount, { PlayerCountT } from "./player-coumt";
import userSocket from "./socket-reducer";
import thunk from "redux-thunk";

export interface ReducerI {
	type: string;
}

interface RootState {
	player: PlayerT;
	playerCount: PlayerCountT;
	userSocket: Socket;
}

const store = configureStore({
	reducer: {
		player,
		playerCount
	}
})

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
