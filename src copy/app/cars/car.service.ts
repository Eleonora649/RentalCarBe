import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Car } from './car';
import { MyTableConfig } from '../components/table/table-config.component';

const baseUrl = 'http://localhost:8080/RentalCar/cars';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'TOKEN_HEADER_KEY'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(public httpClient: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${baseUrl}/list-cars`, httpOptions);
  }

  get(id): Observable<Car> {
    return this.httpClient.get<Car>(`${baseUrl}/list-cars/${id}`);
  }

  create(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${baseUrl}/register`, car, httpOptions);
  }

  update(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(baseUrl, car);
  }

  delete(id): Observable<Car> {
    return this.httpClient.delete<Car>(`${baseUrl}/delete-cars/${id}`);
  }
}