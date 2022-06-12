import { Socket } from "socket.io-client";
import { changeRole, Role } from "../store/player";
import { updateCount } from "../store/player-coumt";
import store from '../store/root';

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

export function setupRoutess(socket: Socket) {
	socket.on("connect", () => console.log("connected"));
	
    socket.on("ready", (info: InfoI) => {
        let playersInfo = info.players;
        let role = (info.role === "Publisher") ? Role.drawer : Role.guesser;
        
        console.log(info.message);

        store.dispatch(updateCount(playersInfo));
        store.dispatch(changeRole(role));
    });

	socket.on("attempt", (attempt: AttemptI) => console.log("Attempt req"));
}
