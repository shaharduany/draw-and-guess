import Drawer from "./drawer";
import Gusser from "./guesser";

class GameEngine {
    guessers: Gusser[];
    drawer: Drawer | undefined;

    constructor(){
        this.guessers = [];
        this.drawer = undefined;
    }

    
}

export default GameEngine;