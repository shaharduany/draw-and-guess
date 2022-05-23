import { Socket } from "socket.io";

export enum PubSub {
    Publisher = "publisher",
    Subscriber = "subscriber",
};

class Player {
    name: string;
    socket: Socket;
    pubSub: PubSub;

    constructor({ name, socket, pubSub = PubSub.Subscriber }: { name: string; socket: Socket; pubSub?: PubSub; }){
        this.name = name;
        this.socket = socket;
        this.pubSub = pubSub;
    }
}

export default Player;