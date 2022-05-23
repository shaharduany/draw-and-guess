import { Socket } from "socket.io";
import Player from "./player";

class Gusser extends Player {
    constructor(socket:Socket){
        super("Guesser", socket);
    }
}

export default Gusser;