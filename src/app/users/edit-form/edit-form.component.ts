import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    
    this.userService.get(this.router.snapshot.params['userId']).subscribe( 
      res => { 
        this.user = res;
        console.log(res);
      })
  }

  save() {
    this.userService.update(this.user).subscribe(
      response => { 
        console.log(response);
        this.user = response;
        this.route.navigate(['userlist']);
     })
  }
}