import { Socket } from "socket.io";
import Drawer from "./drawer";
import Gusser from "./guesser";
import { PubSub } from "./player";

class GameEngine {
	drawer: Drawer | undefined;
	gussers: Gusser[];
	private players: number;

	constructor() {
		this.gussers = [];
		this.drawer = undefined;
		this.players = 0;
	}

	addPlayer(socket: Socket) {
		if (typeof this.drawer === "undefined") {
			this.drawer = new Drawer(socket);
		} else {
			this.gussers.push(new Gusser(socket));
		}
		this.players++;
	}

	removePlayer(socket: Socket) {
		if (this.drawer instanceof Drawer && this.drawer.socket === socket) {
			if (!this.switchTurn()) {
				this.drawer = undefined;
			}
		}
		this.gussers.filter((value, index) => value.socket !== socket);
		this.players--;
	}

	startGame() {
		if (this.players < 2 || this.drawer === undefined) {
			return false;
		}

		this.sendUpdate(this.drawer.socket, PubSub.Publisher);
		this.gussers.map((value) => this.sendUpdate(value.socket));
	}

	private sendUpdate(socket: Socket, role: PubSub = PubSub.Subscriber) {
		socket.send({
			message: "Game has started",
			players: this.players,
			role,
		});
	}

	switchTurn() {
		if (this.gussers.length < 1) {
			return false;
		}
		let hold = this.drawer;

		this.drawer = new Drawer(this.gussers[0].socket);
		this.gussers = this.gussers.slice(1, this.gussers.length);

		if (hold !== undefined) {
			this.gussers.push(hold);
		}

		return true;
	}
}

export default GameEngine;
