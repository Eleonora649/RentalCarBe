import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  user: User;
  submitted = false;
  button: ButtonComponent;

  onSubmit() { 
    this.submitted = true; 
    console.log( this.user)
  }

  constructor() {}
  
  ngOnInit() {
    this.user = new User({
      name:"", surname:"", email:"", password:""
    })
  }

}
