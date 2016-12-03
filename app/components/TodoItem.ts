import { Component, Input, Output, EventEmitter } from '@angular/core';

import TodoItem from './../model/TodoItem';

@Component({
    selector: "todo-item", 
    template: 
    `
        <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" [checked]="todoItem.done" (change)="toggleTodo()">
            <span class="custom-control-indicator"></span>
        </label>
        <span [ngClass]="getTodoDonenessClass()">{{todoItem.text}}</span>
        <a class="todo-item-delete-button" href="javascript:void(0)" (click)="deleteTodo()">&times;</a>
    `
})
export default class TodoItemComponent {
    @Input() public todoItem: TodoItem;
    @Output() public todoItemDeleted: EventEmitter<TodoItem>;

    constructor(){
        this.todoItemDeleted = new EventEmitter<TodoItem>();
    }

    private getTodoDonenessClass() {
        return {
            [this.todoItem.done ? "todo-done" : "todo-not-done"] : true
        };
    }
 
    private toggleTodo(){
        this.todoItem.done = !this.todoItem.done;
    }

    private deleteTodo(){
        this.todoItemDeleted.emit(this.todoItem);
    }
}


