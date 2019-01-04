import {TodoCreateComponent} from './user/todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from 'src/app/users/users-routing.module';

@NgModule({
  declarations: [
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersRoutingModule
  ]
})
export class UsersModule { }
