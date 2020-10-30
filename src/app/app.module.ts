import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthService } from './_services/auth.service';
import { UserService } from './users/user.service';
import { CarService } from './cars/car.service';
import { BookingsService } from './bookings/bookings.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';

import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { BookingsComponent } from './bookings/booking-form/bookings.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { ListBookingsComponent } from './bookings/list-bookings/list-bookings.component';
import { EditFormComponent } from './users/edit-form/edit-form.component';

import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/_errorMessage/error.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,
    LoginComponent, HomeComponent, ProfileComponent, 
    UserFormComponent, CarFormComponent, 
    BookingsComponent, ListUsersComponent, 
    ListCarsComponent, ListBookingsComponent, 
    EditFormComponent,
    FooterComponent, ForbiddenComponent, 
    ErrorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, AppRoutingModule
  ],
  providers: [authInterceptorProviders, UserService, AuthService, CarService, BookingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}