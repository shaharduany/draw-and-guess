import { io, Socket } from "socket.io-client";
import { Role, updateRole, updateWord } from "../store/player";
import { updateCount } from "../store/player-coumt";
import store from "../store/root";

interface EmitResponseI {
	error?: string;
}

interface InfoI {
	message: string;
	players: number;
	role: "publisher" | "subscriber";
	word: string;
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
            
            let flag = info.role === "publisher";
            const role = flag ? Role.drawer : Role.guesser;
            console.log(info);
            store.dispatch(updateCount(newCount));
            store.dispatch(updateRole(role));
            if(flag){
                store.dispatch(updateWord(info.word))
            }
        });
    }

	static emit(event: string, data: object) {
		SocketClient.socket.emit(event, data);
    }
}
