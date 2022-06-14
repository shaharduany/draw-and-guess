import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerI } from "./root";

export enum Role {
	waiting = "WAITING",
	guesser = "GUESSER",
	drawer = "DRAWER",
}

export interface PlayerT {
	role: Role;
	word?: string;
}


const initialState: PlayerT = {
	role: Role.waiting,
};

const player = createSlice({
	name: "player",
	initialState,
	reducers: {
		updateRole(state: PlayerT, action: PayloadAction<Role>) {
			state.role = action.payload;
		},
		updateWord(state: PlayerT, action: PayloadAction<string>){
			state.word = action.payload;
		}
	},
});
export const { updateRole, updateWord } = player.actions;
export default player.reducer;
