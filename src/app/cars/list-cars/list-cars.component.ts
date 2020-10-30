import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/bookings/booking';
import { BookingsService } from 'src/app/bookings/bookings.service';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  car: Car[];

  constructor(private carService: CarService, private route: Router, private bookingService: BookingsService) { }

  ngOnInit(): void {
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
    this.carService.update(car).subscribe ( result => {
        for(let i=0; i<this.car.length; i++) {
          this.carService.get(car.idCar);
          this.car[i] = result;
          console.log(result);
        }
      })
  }

  createBooking() {
    this.route.navigate(['bookings']);
  }
}
