"use strict";
var TodoItem = (function () {
    function TodoItem(text, done) {
        if (done === void 0) { done = false; }
        this.text = text;
        this.done = done;
    }
    return TodoItem;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoItem;
//# sourceMappingURL=TodoItem.js.map