import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import { TemporalService } from 'src/app/temporal.service';
import { TodoHTTPService } from 'src/app/shared/services/todo-http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  //todos: vector de Todo's
  private todos: Todo[]=[];
  
  constructor(private temporal: TemporalService, private http: TodoHTTPService) {}

  ngOnInit() {
    //crea una copia de los todos del servicio dummy
    this.todos=this.temporal.sendTodos().slice();
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
