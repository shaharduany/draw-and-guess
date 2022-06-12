import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerI } from "./root";

export enum Role {
	waiting = "WAITING",
	guesser = "GUESSER",
	drawer = "DRAWER",
}

export interface PlayerT {
	role: Role;
}

interface RoleUpdateT {
	role: Role;
}

const initialState: PlayerT = { role: Role.waiting };

const player = createSlice({
	name: "player",
	initialState,
	reducers: {
		updateRole(state: PlayerT, action: PayloadAction<RoleUpdateT>){
			state.role = action.payload.role;
		}
	}
})
export const { updateRole } = player.actions;
export default player.reducer;