import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from 'src/app/users/user/todo-create/todo-create.component';
import { TodoListComponent } from 'src/app/users/user/todo-list/todo-list.component';

const routes: Routes = [
  {path: "", component: TodoListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
