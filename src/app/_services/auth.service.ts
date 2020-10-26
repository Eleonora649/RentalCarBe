import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user';

const baseUrl = 'http://localhost:8080/RentalCar/login';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  login(credentials: User): Observable<any> {
    console.log("login auth service");
    return this.httpClient.post(baseUrl, credentials, httpOptions);
  }
}