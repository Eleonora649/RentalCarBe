import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user: User[];

  constructor(private userService: UserService, private route: Router){}
  
  ngOnInit(): void {
      this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll().subscribe( d => {
          this.user = d;
          console.log(d);
        },
        error => { console.log(error);
    });
  }

  delete(id) {      
    this.userService.delete(id).subscribe( d => {
      console.log(d);
      this.userService.getAll().subscribe( users => {
        this.user = users;
      })
      }, error => {
          console.log(error);
      }
    )
  }
 
  update(user) {
    localStorage.setItem("updateUser", user);
    this.route.navigate(['useredit']);
  }
}