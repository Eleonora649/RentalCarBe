import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { USER } from './mock-user';
import { User } from './user';
import { HEADERSUSER } from './mock-headers-user';
import { MyTableConfig } from '../components/table/table-config.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  user: User[];

  getUser(): User[] {
    console.log(USER);
    return USER;  
  }

  getHeadersUser(): MyTableConfig {
    return HEADERSUSER;
}

}
  /*deleteUser(id){
    for(let i = 0; i < this.user.length; ++i){
      if (this.user[i].id === id) {
          console.log(this.user[i]);
          this.user.splice(i,1);
      }
      console.log("Utente eliminato");
  }
  updateUser(id){
    for(let i = 0; i < this.user.length; ++i){
      if (this.user[i].id === id) {
        console.log(this.user[i]);
      }
    }
  }*/