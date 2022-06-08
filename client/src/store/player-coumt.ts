import { ReducerI } from "./root";


const DEFAULT_COUNT = 0;

interface PlayerCountI extends ReducerI{
    type: "NEW_COUNT";
    newCount?: number;
}

export function updateCount(count: number): PlayerCountI{
    return {
        type: "NEW_COUNT",
        newCount: count,
    }
}

export default function playerCount(state: number = DEFAULT_COUNT, action: PlayerCountI){
    switch(action.type){
       case "NEW_COUNT":
           state = action.newCount!;
           break;
    }
}