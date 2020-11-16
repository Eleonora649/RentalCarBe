import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/cars/car';
import { CarService } from 'src/app/cars/car.service';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {
  booking: Booking;
  car: Car[];

  constructor(private route: Router, private router: ActivatedRoute, private bookingService: BookingsService, private carService: CarService) { }

  ngOnInit(): void {
    this.booking = new Booking();

    this.bookingService.get(this.router.snapshot.params['bookingId']).subscribe(
      response => {
        this.booking = response;
        console.log(response);
      }
    )
    this.carService.getAll().subscribe(
      response => this.car = response
    )
  }

  update(car: Car) {
    this.booking.car = car;
    this.bookingService.update(this.booking).subscribe(
      response => { 
        this.booking = response;
        //this.router.navigate(['bookingslist'])
      }
    )
    this.route.navigateByUrl('/bookings', { state: { data: this.booking } } );
    
  }
}
