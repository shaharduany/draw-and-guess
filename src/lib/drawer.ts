import { Socket } from "socket.io";
import Player, { PubSub } from "./player";

class Drawer extends Player {
	constructor(socket: Socket) {
		super({ name: "Drawer", socket, pubSub: PubSub.Subscriber });
	}
}

export default Drawer;
