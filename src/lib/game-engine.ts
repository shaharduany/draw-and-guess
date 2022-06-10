import { Socket } from "socket.io";
import Drawer from "./drawer";
import Gusser from "./guesser";
import { PubSub } from "./player";
import Word from "./word";

/**Send emits
 * 
 * 
 * 
 *  Used emits:
 * 
 * attempt
 * info
 * drawing
 */

interface InfoMessageI {
	message: string;
	role: PubSub;
	players: number;
	word?: string;
}

class GameEngine {
	drawer: Drawer | undefined;
	gussers: Gusser[];
	word: string;
	wordGenerator: Word;
	private players: number;

	constructor() {
		this.gussers = [];
		this.drawer = undefined;
		this.players = 0;
		this.wordGenerator = new Word();
		this.word = this.wordGenerator.choice;
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
		let info: InfoMessageI = {
			message: "Game has started",
			players: this.players,
			role,
		};

		if (role === PubSub.Subscriber) {
			info.word = this.word;
		}

		socket.emit("info", info);
	}

	switchTurn() {
		if (this.gussers.length < 1) {
			return false;
		}
		let hold = this.drawer;

		this.drawer = new Drawer(this.gussers[0].socket);
		this.gussers = this.gussers.slice(1, this.gussers.length);

		if (hold instanceof Drawer) {
			this.gussers.push(new Gusser(hold?.socket));
		}

		this.wordGenerator.shuffleAWord();
		this.word = this.wordGenerator.choice;
		return true;
	}

	streamDrawing(drawing: Object) {
		this.gussers.map((value) => {
			value.socket.emit("drawing", drawing);
		});
	}

	checkAttempt(socket: Socket, attempt: string) {
		if (attempt === this.word) {
			socket.emit("attempt", { message: "Correct", correct: true });
			this.switchTurn();
			this.startGame();
			return;
		}

		socket.emit("attempt", { message: "Wrong guess", correct: false });
	}
}

export default GameEngine;