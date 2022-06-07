"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSub = void 0;
var PubSub;
(function (PubSub) {
    PubSub["Publisher"] = "publisher";
    PubSub["Subscriber"] = "subscriber";
})(PubSub = exports.PubSub || (exports.PubSub = {}));
;
class Player {
    constructor({ name, socket, pubSub = PubSub.Subscriber }) {
        this.name = name;
        this.socket = socket;
        this.pubSub = pubSub;
    }
}
exports.default = Player;
