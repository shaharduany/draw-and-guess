import { Socket } from "socket.io";
import Drawer from "./drawer";
import Gusser from "./guesser";

class GameEngine {
    drawer: Drawer | undefined;
    gussers: Gusser[];

    constructor(){
        this.gussers = [];
        this.drawer = undefined;
    }

    addPlayer(socket: Socket){
        if(typeof(this.drawer) === "undefined"){
            this.drawer = new Drawer(socket);
        } else {
            this.gussers.push(new Gusser(socket));
        }
    }

    removePlayer(socket: Socket){
        if(this.drawer instanceof Drawer && this.drawer.socket === socket){
            if(this.gussers.length > 1){
                this.drawer = new Drawer(this.gussers[0].socket);
                this.gussers = this.gussers.slice(1, this.gussers.length);
            } else {
                this.drawer = undefined;
            }
        } else {
            this.gussers.filter((value, index) => value.socket !== socket);
        }
    }

    switchTurn(){
        if(this.gussers.length < 1){
            return false;
        }
        let hold = this.drawer;

        this.drawer = new Drawer(this.gussers[0].socket);
        this.gussers = this.gussers.slice(1, this.gussers.length);
    
        if(hold !== undefined){
            this.gussers.push(hold);
        }
    }
}

export default GameEngine;