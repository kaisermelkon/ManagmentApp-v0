import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TemporalService {

  private todos: Todo[]=[];
  

  constructor() { 
    this.todos=[
      new Todo("buy laptop"),
      new Todo("buy groceries"),
      new Todo("sell bananas"),
    ];
  }

  sendTodos(){
    
     return this.todos;
     
  }
}
