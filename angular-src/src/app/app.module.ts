import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from  './user.service';
import { HttpClientModule }    from '@angular/common/http';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkService } from './drink.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [UserService, DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
