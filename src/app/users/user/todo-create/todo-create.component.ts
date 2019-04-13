import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import { TemporalService } from 'src/app/temporal.service';
import { TodoHTTPService } from 'src/app/shared/services/todo-http.service';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo/todo.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  //todos: vector de Todo's
  private todos: Todo[]=[];
  
  constructor(private temporal: TemporalService, private http: TodoHTTPService, private todoService: TodoService) {}

  ngOnInit() {
    //crea una copia de los todos del servicio dummy
    //this.todos=this.temporal.sendTodos().slice();
    this.todos=this.todoService.sendTodos();
  }

  //si no hay todos retorna true
  todosEmpty(){
    if(this.todos.length===0 ){
      return true;
    }
    return false;
  }

  //Guarda todos los todos en firebase
  saveTodos(){
    this.http.storeTodos()
  }

  //recbe el form del nuevo todo 
  onSubmit(form: NgForm){
    
  }

}
