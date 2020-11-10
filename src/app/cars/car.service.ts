import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';

const baseUrl = 'http://localhost:8080/RentalCar/cars';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

  delete(id): Observable<any> {
    return this.httpClient.delete<Car>(`${baseUrl}/delete-cars/${id}`);
  }
}