import { ReducerI } from "./root";

export interface PlayerCountT {
	playerCount: number;
}

interface PlayerCountReducerI extends ReducerI {
	type: "NEW_COUNT";
	newCount?: number;
}

const DEFAULT_COUNT: PlayerCountT = {
	playerCount: 0,
};

export function updateCount(count: number): PlayerCountReducerI {
	return {
		type: "NEW_COUNT",
		newCount: count,
	};
}

export default function playerCount(
	state: PlayerCountT = DEFAULT_COUNT,
	action: PlayerCountReducerI
) {
	switch (action.type) {
		case "NEW_COUNT":
			state.playerCount = action.newCount!;
			return state;
        default: 
            return state;
	}
}
