import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent implements OnInit {
  bookings: Booking[];

  constructor(private bookingService: BookingsService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveBookings();
  }

  retrieveBookings(): void {
    this.bookingService.getAll().subscribe( 
      b => {
        this.bookings = b;
        console.log(b)
      }, 
      error => {
        console.log(error)
      }
    )
  }

  delete(id: number){
    this.bookingService.delete(id).subscribe( 
      response => { 
        this.retrieveBookings();
      })
  }

  edit(booking: Booking){
    this.router.navigate(['bookingedit', booking.id]);
  }

}
