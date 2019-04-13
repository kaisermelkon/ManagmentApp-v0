import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoList } from '../../models/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /*una lista de todas las listas de todos que hay*/
  private todosList: TodoList[]=[];
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

  setTodosList(todosList: TodoList[]){
    this.todosList=todosList;
  }

  sendTodosList(){
    return this.todosList.slice();
  }

  getTodosList(){

  }
}
