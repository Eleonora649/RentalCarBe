import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

export class ApiMsg {
  constructor(
    public code: string, 
    public message: string) {}
}
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  user: User[];
  row = 8;
  pag = 1;

  apiMsg: ApiMsg;
  mess: string;

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

  refresh() {
    this.mess = "";
    this.userService.getAll().subscribe( users => {
      this.user = users;
    })
  }

  delete(id: string) {      
    this.userService.delete(id).subscribe( 
      response => {
        this.refresh();
        this.apiMsg = response;
        this.mess = this.apiMsg.message;
      }, error => {
          console.log(error);
      }
    )
  }
 
  update(user) {
    console.log(`Modifica utente ${user.id}`)
    this.route.navigate(['useredit', user.id]);
  }
}