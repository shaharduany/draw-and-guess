import { io } from 'socket.io-client';
import { Socket } from "socket.io-client";
import { ReducerI } from "./root";

interface InfoI {
	message: string;
	players: number;
	role: "Publisher" | "Subscriber";
	word?: string;
}

interface AttemptI {
	meessage: string;
	correct: boolean;
}

interface SockerReducerI extends ReducerI {
	type: "SETUP_ROUTES" | "ASSIGN_SOCKET" | "SEND_READY";
	socket?: Socket;
}

export function sendReady():SockerReducerI{
    return { type: "SEND_READY" };
}

function routes(socket: Socket){
    socket.on("connect", () => console.log("connected"));
    socket.on("ready", () => console.log("ready req"));
    socket.on("attempt", () => console.log("Attempt req"));
    return socket;
}

export function assignSocket(socket: Socket): SockerReducerI {
	return {
		type: "ASSIGN_SOCKET",
		socket: socket,
	};
}

export default function userSocket(
	state: Socket | undefined,
	action: SockerReducerI
): Socket | undefined {
    if(typeof (state) === "undefined"){
        return undefined;
    }

	switch (action.type) {
		case "ASSIGN_SOCKET":
			state = routes(action.socket!);
			return state;
        case "SEND_READY":
            return state;
        default:
			return state;
	}
}
