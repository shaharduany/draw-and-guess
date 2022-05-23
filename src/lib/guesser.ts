import Player from "./player";

class Gusser extends Player {
    constructor(name: string = "Annonymous", socket:WebSocket){
        super(name, socket);
    }
}

export default Gusser;