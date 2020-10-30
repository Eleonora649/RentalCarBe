import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }

  retrieveBookings(): void {
    this.bookingService.getAll().subscribe( b => {
      this.bookings = b;
    }, 
      error => {console.log(error)
    })
  }
}
