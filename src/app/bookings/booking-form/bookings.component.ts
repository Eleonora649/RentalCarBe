import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking: Booking[];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
  }

  

}
