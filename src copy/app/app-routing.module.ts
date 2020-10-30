import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { MyTableComponent } from './components/table/table.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { LoginComponent } from './users/login/login.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { Roles } from './users/roles';
import { RouteGuardService } from './_services/rout-guard.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ErrorComponent } from './components/_errorMessage/error.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UserFormComponent},
  {path: 'cars', component: CarFormComponent, canActivate: [RouteGuardService], data: { roles: [Roles.customer][Roles.admin] } },
  {path: 'profile', component: ProfileComponent, canActivate: [RouteGuardService], data: { roles: [Roles.customer]}},
  {path: 'mytable', component: MyTableComponent },
  {path: 'login', component: LoginComponent},
  {path: 'carslist', component: ListCarsComponent},
  {path: 'userlist', component: ListUsersComponent, canActivate: [RouteGuardService], data: { roles: [Roles.admin]}},  
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