import {NgForm} from '@angular/forms';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

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

  constructor(config: NgbDropdownConfig) { 
    //configuraciones del dropdown
    config.placement = 'bottom-right';
    config.autoClose='outside';
  }

  ngOnInit() {
  }

  //recibe la forma del login y llama a la autentificacion
  onSubmit(form: NgForm){

  }
}
