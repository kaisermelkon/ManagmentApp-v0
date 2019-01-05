import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { TodoService } from './todo/todo.service';
import { Todo } from '../models/todo';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TodoHTTPService {

  constructor( private todoService: TodoService, private http: HttpClient, private authService: AuthService) { }


  //Guarda todos los todos en firebase
  storeTodos(){
    const token=this.authService.getToken();
    this.http.put("https://managementapplication-ab8f0.firebaseio.com/todos.json", this.todoService.sendTodos(), {
      params: new HttpParams().set('auth', token)
    }).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  //Obtiene todos los todos en firebase
  getTodos(){
    const token=this.authService.getToken();
    this.http.get<Todo[]>("https://managementapplication-ab8f0.firebaseio.com/todos.json?auth=" + token, {
      params: new HttpParams().set('auth', token)
    })
    .subscribe(
      (todos) => {
        this.todoService.setTodos(todos);
      }
    );
  }

 /*  Este va a ser el metodo para cuando los todos sean un vector que posea un vector de todos
  poder verificar que ese vector interno no sea nulo sino que exista aun asi sea vacio de lo contarrio
  no podra encajar con nuestro model
  getTodos(){
    const token=this.authService.getToken();
    this.http.get("https://managementapplication-ab8f0.firebaseio.com/todos.json?auth="+token)
    .pipe(map(
      (response: Response) =>{
        const todos: Todo[]=response.json();
        for(let todo of todos){
          if(!todo['todo']){
            todo['todo']=[];
          }
        }
        return todos;
      }
    ))
    .subscribe(
      (todos: Todo[]) => {
        this.todoService.setTodos(todos);
      }
    );
  } */

}
