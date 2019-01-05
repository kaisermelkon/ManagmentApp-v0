import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { TemporalService } from 'src/app/temporal.service';
import { TodoHTTPService } from './shared/services/todo-http.service';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthGuardService } from './shared/guards/auth-guard/auth-guard.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';


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
  providers: [
    HttpClientModule,
    TemporalService,
    TodoHTTPService, 
    AuthService, 
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
