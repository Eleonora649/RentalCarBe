import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Roles } from './users/roles';
import { RouteGuardService } from './_services/rout-guard.service';

import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';

import { UserFormComponent } from './users/user-form/user-form.component';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { BookingsComponent } from './bookings/booking-form/bookings.component';

import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { ListBookingsComponent } from './bookings/list-bookings/list-bookings.component';

import { EditFormComponent } from './users/edit-form/edit-form.component';

import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ErrorComponent } from './components/_errorMessage/error.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { role: [Roles.customer]}},
  {path: 'users', component: UserFormComponent},
  {path: 'cars', component: CarFormComponent, canActivate: [RouteGuardService], data: { role: [Roles.admin] } },
  {path: 'bookings', component: BookingsComponent},
  {path: 'userlist', component: ListUsersComponent, canActivate: [RouteGuardService], data: { role: [Roles.admin]}},  
  {path: 'carslist', component: ListCarsComponent},
  {path: 'bookingslist', component: ListBookingsComponent},
  {path: 'useredit', component: EditFormComponent},
  {path: 'forbinned', component: ForbiddenComponent}, 
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: ErrorComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}