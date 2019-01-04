import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import { TemporalService } from 'src/app/temporal.service';
import { TodoHTTPService } from 'src/app/shared/services/todo-http.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  private todos: Todo[]=[];
  
  constructor(private temporal: TemporalService, private http: TodoHTTPService) {}

  ngOnInit() {
    this.todos=this.temporal.sendTodos().slice();
  }

  todosEmpty(){
    if(this.todos.length===0 ){
      return true;
    }
    return false;
  }

  get(){
    this.http.storeTodos()
  }

}
