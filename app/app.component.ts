import { Component } from '@angular/core';

import TodoItem from './model/TodoItem';

@Component({
  selector: 'my-app',
  template: `
    <div class="card" id="main-todo-container">
      <div class="card-block">
        <h4 class="card-title">Todo app</h4>
        <progress-bar [value]="getDonePercentage()"></progress-bar>
        
        <div class="row">
          <div class="col-lg-12">
            <item-input [placeholder]="'Add todo'" (itemAdded)="addTodo($event)">
              <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button" (click)="checkAll()">&#10003; Check all</button>
              </span>
            </item-input>
          </div>
        </div>

        <ul class="list-group todo-list">
          <li class="list-group-item" *ngFor="let todo of todoItems">
            <todo-item [todoItem]="todo" (todoItemDeleted)="deleteTodo($event)"></todo-item>
          </li>
        </ul>

        <button type="button" class="btn btn-danger pull-xs-righ" (click)="deleteDoneTodos()">&times; Delete Done</button>
      </div>
    </div>`
})
export class AppComponent { 
  private todoItems: TodoItem[];
  
  constructor(){
    this.todoItems = [
      new TodoItem("Learn Angular 2"), 
      new TodoItem("Learn React"), 
      new TodoItem("Learn ASP.NET core", true),
      new TodoItem("Learn node.js", true),
    ];
 }

 private getDonePercentage(): number {
   if(this.todoItems.length === 0) { return 100; }

   return 100*this.getDoneItemsCount()/this.getTotalItemsCount();    
 }
 
 private getDoneItemsCount(): number {
   return this.todoItems.filter(todo => todo.done).length;
 }
 
 private getTotalItemsCount(): number {
   return this.todoItems.length;
 }
 
 private deleteDoneTodos(){
   //delete done -> keep only not done items
   this.todoItems = this.todoItems.filter(it => !it.done);
 }

 private deleteTodo(todo: TodoItem){
   this.todoItems.splice(this.todoItems.indexOf(todo), 1); 
 }

 private checkAll(){
   this.todoItems.forEach(it => it.done = true);
 }

 private addTodo(value: string){
   this.todoItems.push(new TodoItem(value));
 }
}
