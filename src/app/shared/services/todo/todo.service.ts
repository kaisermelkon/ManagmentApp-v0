import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[]=[];

  constructor() { }

  setTodos(todos: Todo[]){
    this.todos=todos;
  }

  sendTodos(){
    return this.todos.slice();
  }

  getTodos(){

  }
}
