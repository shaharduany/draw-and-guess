import { ReducerI } from "./root";


interface PlayerCountReducerI extends ReducerI {
	type: "NEW_COUNT";
	newCount?: number;
}

const DEFAULT_COUNT = 0;

export function updateCount(count: number): PlayerCountReducerI {
	return {
		type: "NEW_COUNT",
		newCount: count,
	};
}

export default function playerCount(
	state: number = DEFAULT_COUNT,
	action: PlayerCountReducerI
): number {
	switch (action.type) {
		case "NEW_COUNT":
			state = action.newCount!;
			return state;
        default: 
            return state;
	}
}
