import {HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { TemporalService } from 'src/app/temporal.service';
import { TodoHTTPService } from './shared/services/todo-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, TemporalService, TodoHTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
