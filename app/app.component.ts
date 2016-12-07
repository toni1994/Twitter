import { Component } from '@angular/core';

import TodoItem from './model/TodoItem';

@Component({
  selector: 'my-app',
  template: `
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Naslovnica <i class="fa fa-home fa-lx" aria-hidden="true"></i> </a></li>
        <li><a href="#">Obavijesti <i class="fa fa-bell fa-lx" aria-hidden="true"></i> </a></li>
		    <li><a href="#">Poruke <i class="fa fa-envelope fa-lx" aria-hidden="true"></i> </a></li>
        
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
	  <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
	  
	  <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
		
    
       <button type="submit" class="btn btn-primary">Tweet</button>
       
        
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


<div class="col-md-3">
</div>
<div class="col-md-6">
          <div class="row">
            

       <div class="box profile-info n-border-top">
                    <form>
                        <textarea class="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
                    </form>
                    <div class="box-footer box-form">
                        <button type="button" class="btn btn-primary pull-right">Post</button>
                        <ul class="nav nav-pills">
                            <li><a href="#"><i class="fa fa-map-marker"></i></a></li>
                            <li><a href="#"><i class="fa fa-camera"></i></a></li>
                            <li><a href="#"><i class=" fa fa-film"></i></a></li>
                            <li><a href="#"><i class="fa fa-microphone"></i></a></li>
                        </ul>
                    </div>
       </div>
       </div>
        <div class="row">
        dslfjsldkfjsldk
        </div>
      </div>



       
      
               

               
   `
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
