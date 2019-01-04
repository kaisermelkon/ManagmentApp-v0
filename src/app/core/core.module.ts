import {CoreRoutingModule} from './core-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CoreRoutingModule,
    

  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CoreRoutingModule,
    
  ]
})
export class CoreModule { }
