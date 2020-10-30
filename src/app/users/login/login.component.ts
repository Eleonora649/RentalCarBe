import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  errorMessage = 'Wrong email or password';

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(  
      data => {
        console.log(data);
        this.isLoggedIn = true;
        this.route.navigate(['/']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoggedIn = false;
      }
    );
  }
}