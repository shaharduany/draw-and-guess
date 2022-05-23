export enum PubSub {
    Publisher = "publisher",
    Subscriber = "subscriber",
};

class Player {
    name: string,
    socket: WebSocket;
    pubSub: PubSub;

    constructor(name: string, socket:WebSocket, pubSub: PubSub = PubSub.Subscriber){
        this.name = name;
        this.socket = socket;
        this.pubSub = pubSub;
    }
}

export default Player;