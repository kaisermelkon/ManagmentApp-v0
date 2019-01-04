import {TodoCreateComponent} from './user/todo-create/todo-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from 'src/app/users/users-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodoCreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  exports: [
    UsersRoutingModule
  ]
})
export class UsersModule { }
