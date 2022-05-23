import { Socket } from "socket.io";
import Player from "./player";

class Gusser extends Player {
	constructor(socket: Socket) {
		super({ name: "Guesser", socket });
	}
}

export default Gusser;
