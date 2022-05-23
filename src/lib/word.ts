import wordList from 'word-list-json';

export default class Word {
    choice: string;

    constructor(){
        this.choice = this.shuffleAWord();
    }

    shuffleAWord(){
        let index = Math.floor(Math.random() * wordList.length);
        return wordList[index];
    }
}