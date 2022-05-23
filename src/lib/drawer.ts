import { Socket } from "socket.io";
import Player, { PubSub } from "./player";


class Drawer extends Player {
    constructor(socket: Socket){
        super("Drawer", socket, PubSub.Subscriber);
    }
}

export default Drawer;