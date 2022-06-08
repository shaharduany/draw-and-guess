"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordList = ["dummy", "data", "for", "now"];
class Word {
    constructor() {
        this.choice = this.shuffleAWord();
    }
    shuffleAWord() {
        let index = Math.floor(Math.random() * wordList.length);
        return wordList[index];
    }
}
exports.default = Word;
