import { NgModule }  from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import ProgressBar from './components/ProgressBar';
import ItemInput from './components/ItemInput';
import TodoItem from './components/TodoItem';

@NgModule({
  imports:      [ BrowserModule, NgbModule.forRoot()],
  declarations: [ AppComponent, ProgressBar, ItemInput, TodoItem ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
