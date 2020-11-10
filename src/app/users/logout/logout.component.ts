import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  userLog = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.clear();
    console.log("Component logout")
    this.router.navigate(['login']);
  }

}
