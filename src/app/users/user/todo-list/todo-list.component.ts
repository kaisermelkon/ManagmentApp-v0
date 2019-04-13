import { Component, OnInit } from '@angular/core';
import {TodoList} from "../../../shared/models/todo-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
private todosList: TodoList[]=[];
  constructor() { }

  ngOnInit() {
  }

  todosEmpty(){
    if(this.todosList.length===0 ){
      return true;
    }
   
    return false;
  }

}
