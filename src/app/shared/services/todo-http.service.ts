import { Injectable } from '@angular/core';
import { TemporalService } from 'src/app/temporal.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoHTTPService {

  constructor(private temporal: TemporalService, private http: HttpClient) { }


  //Guarda todos los todos en firebase
  storeTodos(){
    this.http.put("https://managementapplication-ab8f0.firebaseio.com/todos.json", this.temporal.sendTodos()).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );;
  }

}
