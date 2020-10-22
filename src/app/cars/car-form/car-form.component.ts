import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car;
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    console.log("Car: " + this.car.model +" " + this.car.manufacturer)
  }

  constructor() { }

  ngOnInit(): void {
    this.car = new Car({
      model:"", license:"", manufacturer:"", carRegistration:""
    })
  }

}
