"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCount = void 0;
const DEFAULT_COUNT = 0;
function updateCount(count) {
    return {
        type: "NEW_COUNT",
        newCount: count,
    };
}
exports.updateCount = updateCount;
function playerCount(state = DEFAULT_COUNT, action) {
    switch (action.type) {
        case "NEW_COUNT":
            state = action.newCount;
            return state;
        default:
            return state;
    }
}
exports.default = playerCount;
