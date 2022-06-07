"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const word_list_json_1 = __importDefault(require("word-list-json")); // A library that returns an array of random words
class Word {
    constructor() {
        this.choice = this.shuffleAWord();
    }
    shuffleAWord() {
        let index = Math.floor(Math.random() * word_list_json_1.default.length);
        return word_list_json_1.default[index];
    }
}
exports.default = Word;
