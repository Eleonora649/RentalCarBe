import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { MyTableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { LoginComponent } from './users/login/login.component';

import { Router } from '@angular/router';
import { UserService } from './users/user.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthService } from './_services/auth.service';
import { CarService } from './cars/car.service';
import { ErrorComponent } from './components/_errorMessage/error.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    ListUsersComponent, ListCarsComponent, ProfileComponent,
    MyTableComponent, FooterComponent,
    UserFormComponent, CarFormComponent, LoginComponent,
    ErrorComponent, ForbiddenComponent, NavbarComponent, HomeComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, AppRoutingModule
  ],
  providers: [authInterceptorProviders, UserService, AuthService, CarService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {}
}