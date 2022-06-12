import { io, Socket } from "socket.io-client";
import { Role } from "../store/player";
import store from "../store/root";

interface EmitResponseI {
	error?: string;
}

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

export default class SocketClient {
	static socket: Socket;

	constructor() {
		SocketClient.socket = io("localhost:4000");
        SocketClient.socket.on("connect", () => console.log("connected"));
        SocketClient.socket.on("info", (info: InfoI) => {
            const newCount = info.players;
            
            let flag = info.role === "Publisher";
            const role = flag ? Role.drawer : Role.guesser;
        });
    }

	static emit(event: string, data: object) {
		SocketClient.socket.emit(event, data);
    }
}
