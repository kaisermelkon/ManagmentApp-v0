import {NgForm} from '@angular/forms';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarActive: string;
  token;

  constructor(config: NgbDropdownConfig) { 
    config.placement = 'bottom-right';
    config.autoClose='outside';
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

  }
}
