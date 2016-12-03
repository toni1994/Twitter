"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodoItem_1 = require('./../model/TodoItem');
var TodoItemComponent = (function () {
    function TodoItemComponent() {
        this.todoItemDeleted = new core_1.EventEmitter();
    }
    TodoItemComponent.prototype.getTodoDonenessClass = function () {
        return (_a = {},
            _a[this.todoItem.done ? "todo-done" : "todo-not-done"] = true,
            _a
        );
        var _a;
    };
    TodoItemComponent.prototype.toggleTodo = function () {
        this.todoItem.done = !this.todoItem.done;
    };
    TodoItemComponent.prototype.deleteTodo = function () {
        this.todoItemDeleted.emit(this.todoItem);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TodoItem_1.default)
    ], TodoItemComponent.prototype, "todoItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoItemComponent.prototype, "todoItemDeleted", void 0);
    TodoItemComponent = __decorate([
        core_1.Component({
            selector: "todo-item",
            template: "\n        <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"todoItem.done\" (change)=\"toggleTodo()\">\n            <span class=\"custom-control-indicator\"></span>\n        </label>\n        <span [ngClass]=\"getTodoDonenessClass()\">{{todoItem.text}}</span>\n        <a class=\"todo-item-delete-button\" href=\"javascript:void(0)\" (click)=\"deleteTodo()\">&times;</a>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoItemComponent;
//# sourceMappingURL=TodoItem.js.map