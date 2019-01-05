import {CoreRoutingModule} from './core-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from '../shared/services/auth/auth.service';



@NgModule({
  declarations: [SignUpComponent],
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
    
  ],
  providers: []
})
export class CoreModule { }
