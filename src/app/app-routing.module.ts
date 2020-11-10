import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Roles } from './users/roles';
import { RouteGuardService } from './_services/rout-guard.service';

import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';

import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { BookingsComponent } from './bookings/newBooking/bookings.component';

import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { ListBookingsComponent } from './bookings/list-bookings/list-bookings.component';

import { EditFormComponent } from './users/edit-form/edit-form.component';
import { EditCarFormComponent } from './cars/editcarform/editcarform.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ErrorComponent } from './components/_errorMessage/error.component';
import { LogoutComponent } from './users/logout/logout.component';
import { EditBookingComponent } from './bookings/edit-booking/edit-booking.component';

const appRoutes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { role: [Roles.customer] }},
  {path: 'users', component: UserFormComponent},
  {path: 'cars', component: CarFormComponent, canActivate: [RouteGuardService], data: { role: [Roles.admin] } },
  {path: 'bookings', component: BookingsComponent, data: {} },
  {path: 'userlist', component: ListUsersComponent, canActivate: [RouteGuardService], data: { role: [Roles.admin] }},  
  {path: 'carslist', component: ListCarsComponent, canActivate: [RouteGuardService]},
  {path: 'bookingslist', component: ListBookingsComponent, canActivate: [RouteGuardService], data: { role: [Roles.admin] }},
  {path: 'useredit/:userId', component: EditFormComponent, canActivate: [RouteGuardService]},
  {path: 'caredit/:carId', component: EditCarFormComponent, canActivate: [RouteGuardService], data: {role: [Roles.admin] }},
  {path: 'bookingedit/:bookingId', component: EditBookingComponent, data: {} },
  {path: 'logout', component: LogoutComponent},
  {path: 'forbinned', component: ForbiddenComponent}, 
  {path:'**', component: ErrorComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}