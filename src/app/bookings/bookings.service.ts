import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Booking } from './booking';

const baseUrl = 'http://localhost:8080/RentalCar/bookings';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  constructor(public httpClient: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${baseUrl}/list-bookings`, httpOptions);
  }

  get(id): Observable<Booking> {
    return this.httpClient.get<Booking>(`${baseUrl}/list-bookings/${id}`);
  }

  create(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(baseUrl, booking);
  }

  update(booking): Observable<Booking> {
    return this.httpClient.put<Booking>(baseUrl, booking);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete<Booking>(`${baseUrl}/delete-bookings/${id}`);
  }
}