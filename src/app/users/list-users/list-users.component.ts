import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { MyTableConfig } from 'src/app/components/table/table-config.component';
import { UserService } from '../user.service';
import { MyTableComponent } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  data: User[];
  config: MyTableConfig; 
  button: MyTableComponent;

  constructor(private userService: UserService){}
  
  ngOnInit() {
      this.data = this.userService.getUser();
      console.log(this.data);

      this.config = this.userService.getHeadersUser();
  }

  

}