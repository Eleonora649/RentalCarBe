import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
  
  save(){
    this.userService.update(this.user).subscribe(
      edit => {
          this.user = edit;
          console.log("Utente modificato");
          this.router.navigate(['userlist']);
        }, 
      error => {
        console.log(error.error);
      }
    )
  }
}