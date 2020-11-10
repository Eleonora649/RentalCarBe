import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';
import { ApiMsg } from './list-users/list-users.component';

const baseUrl = 'http://localhost:8080/RentalCar/users';
const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
   //  Authorization: ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http: HttpClient) { }
  user: User;
  
  getAll(): Observable<any> {
    return this.http.get<User[]>(`${baseUrl}/list-customers`, httpOptions);
  }
  
  get(id): Observable<any> {
    return this.http.get<User>(`${baseUrl}/list-customers/${id}`, httpOptions);
  }

  getUserProfile(email: String): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${email}`, httpOptions);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${baseUrl}/register`, user, httpOptions);
  }

  update(user: User): Observable<any> {
    return this.http.put<any>(baseUrl, user);
  }

  delete(id) {
    return this.http.delete<ApiMsg>(`${baseUrl}/delete-customers/${id}`);
  }
}