import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from  './user.service';
import { HttpClientModule }    from '@angular/common/http';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkService } from './drink.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DrinkFormComponent } from './drink-form/drink-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DrinkListComponent,
    DrinkFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [UserService, DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
