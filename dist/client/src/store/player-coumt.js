"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCount = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = { count: 0 };
const playerCount = (0, toolkit_1.createSlice)({
    name: "playerCount",
    initialState,
    reducers: {
        updateCount(state, action) {
            state.count = action.payload;
        }
    }
});
exports.updateCount = playerCount.actions.updateCount;
exports.default = playerCount.reducer;
