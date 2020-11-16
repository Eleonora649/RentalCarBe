import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserProfile(this.authService.getUser()).subscribe(
      data => {
        this.user = data;
      },
        error => { console.log(error);
      }
    );
  }

  edit(user: User) {
    console.log(`Modifica utente ${user.id}`)
    this.router.navigate(['useredit', user.id]);
  }
}
