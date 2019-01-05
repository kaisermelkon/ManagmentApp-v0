import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardService } from '../shared/guards/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: 'manage', loadChildren: "../users/users.module#UsersModule", canActivate: [AuthGuardService]},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
