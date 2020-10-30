import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

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
  
  get(id: number): Observable<any> {
    return this.http.get<User>(`${baseUrl}/list-customers/${id}`, httpOptions);
  }

  getUserProfile(email): Observable<any> {
    return this.http.get<User>(`${baseUrl}/profile/${email}`, httpOptions);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${baseUrl}/register`, user, httpOptions);
  }

  update(user): Observable<any> {
    return this.http.put<User>(baseUrl, user);
  }

  delete(id): Observable<any> {
    return this.http.delete<User>(`${baseUrl}/delete-customers/${id}`);
  }
}