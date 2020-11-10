import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/RentalCar';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
export const CONST_USER = "currentUser";
export const CONST_AUTH_TOKEN = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(credentials: User): Observable<any> {
    return this.httpClient.post(`${baseUrl}/login`, credentials, httpOptions).pipe
    (map(
        data => {
          sessionStorage.setItem(CONST_USER, credentials.email);
          sessionStorage.setItem(CONST_AUTH_TOKEN, data.token);
          return data;
        }
      )
    );
  } 
  
  getUser(): string {
    if(this.loggedUser()) {
      console.log(sessionStorage.getItem(CONST_USER));
      return sessionStorage.getItem(CONST_USER);
    } else {
      return null;
    }
  }  

  getAuthToken(): string {
    if (this.loggedUser()) {
      console.log(sessionStorage.getItem(CONST_AUTH_TOKEN));
      return sessionStorage.getItem(CONST_AUTH_TOKEN);
    } else
      return "";
  }
  
  loggedUser() {
    //sessionStorage.removeItem(CONST_USER);
    let user = sessionStorage.getItem(CONST_USER);
    return (sessionStorage.getItem(CONST_USER) != null) ? user : "";
  }

  getUserLogged() {
    sessionStorage.getItem(CONST_AUTH_TOKEN);
  }

  saveToken(token: string) {
    sessionStorage.removeItem(CONST_AUTH_TOKEN);
    sessionStorage.setItem(CONST_AUTH_TOKEN, token);
  }

  saveUser(user) {
    sessionStorage.removeItem(CONST_USER);
    sessionStorage.setItem(CONST_USER, JSON.stringify(user));
  }

  isLogged() {
    return (sessionStorage.getItem(CONST_USER) != null) ? true : false;
  }

  isLoggedOut() {
    return !this.isLogged();
  }

  clear() {
    sessionStorage.removeItem(CONST_USER);
    sessionStorage.removeItem(CONST_AUTH_TOKEN);
  }
}