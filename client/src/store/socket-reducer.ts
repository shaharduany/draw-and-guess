import { io } from 'socket.io-client';
import { Socket } from "socket.io-client";
import { ReducerI } from "./root";

interface SockerReducerI extends ReducerI {
	type: "ASSIGN_SOCKET";
	socket?: Socket;
}

const DEFAULT: Socket = io("localhost:4000");

export function assignSocket(socket: Socket): SockerReducerI {
	return {
		type: "ASSIGN_SOCKET",
		socket: socket,
	};
}

export default function userSocket(
	state: Socket = DEFAULT,
	action: SockerReducerI
): Socket {
	switch (action.type) {
		case "ASSIGN_SOCKET":
			state = action.socket!;
			return state;
		default:
			return state;
	}
}
