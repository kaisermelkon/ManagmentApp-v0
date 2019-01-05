import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ManagementApplication';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDqo0dALvuj_HWgocsn2HhgCw7q-3XSPBA",
      authDomain: "managementapplication-ab8f0.firebaseapp.com"
    });
  }
}
