import {NgForm} from '@angular/forms';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //navbarActve: establecer que pagina esta activa
  //token: para la autentificacion
  navbarActive: string;
  token;

  constructor(private config: NgbDropdownConfig, private authService: AuthService ) { 
    //configuraciones del dropdown
    config.placement = 'bottom-right';
    config.autoClose='outside';
  }

  ngOnInit() {
  }

  //recibe la forma del login y llama a la autentificacion
  onSubmit(form: NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signInUser(email, password);
  }

  isAuthenticated(){
    return this.authService.isAutheticated();
  }

  logoutUser(){
    this.authService.logoutUser();
  }
}
