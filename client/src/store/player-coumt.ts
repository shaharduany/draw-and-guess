import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlayerCountT {
	count: number;
}

type NewCount = number;

const initialState: PlayerCountT = { count: 0 };

const playerCount = createSlice({
	name: "playerCount",
	initialState,
	reducers: {
		updateCount(state: PlayerCountT, action: PayloadAction<NewCount>){
			state.count = action.payload;
		}
	}
});

export const { updateCount } = playerCount.actions;
export default playerCount.reducer;
