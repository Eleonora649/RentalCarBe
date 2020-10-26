import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarFormComponent } from './cars/car-form/car-form.component';
import { ListCarsComponent } from './cars/list-cars/list-cars.component';
import { MyTableComponent } from './components/table/table.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { LoginComponent } from './users/login/login.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const appRoutes: Routes = [
  {path: '',   redirectTo: '/', pathMatch: 'full'},
  {path: 'users/register', component: UserFormComponent},
  {path: 'cars', component: CarFormComponent},
  {path: 'mytable', component: MyTableComponent },
  {path: 'login', component: LoginComponent},
  {path: 'cars/list-cars', component: ListCarsComponent},
  {path: 'userlist', component: ListUsersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
}