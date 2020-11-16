import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/bookings/booking';
import { User } from 'src/app/users/user';
import { AuthService } from 'src/app/_services/auth.service';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  car: Car[];
  booking: Booking;
  row = 8;
  pag = 1;

  constructor(
    private carService: CarService, private route: Router) { }

  ngOnInit(): void {
    this.booking = new Booking();
    this.retrieveCars();
  }
  
  retrieveCars(): void {
    this.carService.getAll().subscribe( cars => {
      this.car = cars;
      console.log(cars);  
    },
      error => {console.log(error);
      });
  }

  delete(id: number) {      
    this.carService.delete(id).subscribe( d => {
      console.log(d);
      this.carService.getAll().subscribe( cars => {
        this.car = cars;
      });
    }, error => {
          console.log(error);
      }
    )
  }

  update(car: Car) {
    this.route.navigate(['caredit', car.idCar]);
  }

  createBooking(car) {
    this.booking.car = car;
    this.route.navigateByUrl('/bookings', { state: { data: this.booking } } );
  }

  addCar() {
    this.route.navigate(['cars'])
  }
}