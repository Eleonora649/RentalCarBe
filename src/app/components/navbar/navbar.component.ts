import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/users/roles';
import { User } from 'src/app/users/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  
}