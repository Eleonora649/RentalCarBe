import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  user: User;

  constructor(private userService: UserService, private route: Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
    }

  onSubmit() { 
    this.userService.create(this.user).subscribe(
      result => {
        this.user = result;
        console.log("Utente aggiunto con successo");
        this.route.navigate(['profile']);
    })
  }
}
