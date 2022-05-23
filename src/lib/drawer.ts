import Player, { PubSub } from "./player";


class Drawer extends Player {
    constructor(name: string = "Annonymous", socket: WebSocket, pubSub: PubSub = PubSub.Publisher){
        super(name, socket, pubSub);
    }
}

export default Drawer;