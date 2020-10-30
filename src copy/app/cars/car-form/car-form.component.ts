import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car;

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private carService: CarService) { 
      this.car = new Car();
  }

  ngOnInit(): void {
    }

  onSubmit() { 
    this.carService.create(this.car).subscribe(result => console.log("Automobile aggiunta con successo"));
  }
}
