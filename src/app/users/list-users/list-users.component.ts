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
 // config: MyTableConfig; 

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

  delete(id: number) {
    this.userService.delete(id).subscribe( data => {
      console.log(this.userService.get(id));
      this.route.navigate(['/userlist']);
    }, error => {
      console.log(error);
    })
  }

  update(user: User) {
    this.route.navigate(['users']);
    this.userService.update(user).subscribe ( result => {
        console.log(result);
      })
  }

}