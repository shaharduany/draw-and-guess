import { ReducerI } from "./root";

export enum Role {
	waiting = "WAITING",
	guesser = "GUESSER",
	drawer = "DRAWER",
}

interface PlayerReducerI extends ReducerI {
	type: "UPDATE_ROLE";
	role?: Role;
}

export interface PlayerT {
	role: Role;
}

const DEFAULT: PlayerT = {
	role: Role.waiting,
};

export function changeRole(role: Role): PlayerReducerI {
	return {
		type: "UPDATE_ROLE",
		role,
	};
}

export default function player(
	state: PlayerT = DEFAULT,
	action: PlayerReducerI
): PlayerT {
	switch (action.type) {
		case "UPDATE_ROLE":
			state.role = action.role!;
			return state;
		default:
			return state;
	}
}