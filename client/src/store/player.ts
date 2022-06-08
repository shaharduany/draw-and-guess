import { ReducerI } from "./root";

enum Role {
	waiting = "WAITING",
	guesser = "GUESSER",
	DRAWER = "DRAWER",
}

const DEFAULT = Role.waiting;

interface PlayerReducerI extends ReducerI {
	type: "UPDATE_ROLE";
	role?: Role;
}

export function changeRole(role: Role): PlayerReducerI {
	return {
		type: "UPDATE_ROLE",
		role,
	};
}

export default function player(state: Role = DEFAULT, action: PlayerReducerI) {
	switch (action.type) {
		case "UPDATE_ROLE":
			state = action.role!;
			break;
	}
}
