"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRole = void 0;
var Role;
(function (Role) {
    Role["waiting"] = "WAITING";
    Role["guesser"] = "GUESSER";
    Role["DRAWER"] = "DRAWER";
})(Role || (Role = {}));
const DEFAULT = {
    role: Role.waiting,
};
function changeRole(role) {
    return {
        type: "UPDATE_ROLE",
        role,
    };
}
exports.changeRole = changeRole;
function player(state = DEFAULT, action) {
    switch (action.type) {
        case "UPDATE_ROLE":
            state.role = action.role;
            return state;
        default:
            return state;
    }
}
exports.default = player;
