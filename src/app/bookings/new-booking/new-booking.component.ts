import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/cars/car';
import { User } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {
  booking: Booking;
  user: User;

  constructor(private userService: UserService, 
    private authService: AuthService, 
    private bookingService: BookingsService, 
    private router: Router) { 
    //this.route.getCurrentNavigation().extras.state
    
  }

  ngOnInit(): void {
    this.booking = new Booking();
    
    this.booking.car = new Car(); 
    this.booking.car = history.state.data.car;
    this.booking.user = new User();
    this.userService.getUserProfile(this.authService.getUser()).subscribe(
      response => {
        this.booking.user = response;
        
      }
    );
    this.booking.startBooking = history.state.data.startBooking;
    this.booking.endOfBooking = history.state.data.endOfBooking;

    console.log(this.booking);
  }

  createBooking() {
    this.bookingService.create(this.booking).subscribe(
      response => { 
        this.booking = response;
        this.router.navigate(['bookingslist'])
      }
    )
  }
}