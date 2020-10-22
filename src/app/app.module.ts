import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { MyTableComponent } from './components/table/table.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListUsersComponent,
    ListCarsComponent,
    MyTableComponent,
    UserFormComponent,
    CarFormComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
 }
