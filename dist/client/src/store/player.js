"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRole = exports.Role = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
var Role;
(function (Role) {
    Role["waiting"] = "WAITING";
    Role["guesser"] = "GUESSER";
    Role["drawer"] = "DRAWER";
})(Role = exports.Role || (exports.Role = {}));
const initialState = { role: Role.waiting };
const player = (0, toolkit_1.createSlice)({
    name: "player",
    initialState,
    reducers: {
        updateRole(state, action) {
            state.role = action.payload.role;
        }
    }
});
exports.updateRole = player.actions.updateRole;
exports.default = player.reducer;
