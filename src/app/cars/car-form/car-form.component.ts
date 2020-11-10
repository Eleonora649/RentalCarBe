import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Category } from '../category';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car;
  categories: Category[];

  constructor(private router: Router, private carService: CarService) { 
    this.car = new Car();
  }

  ngOnInit(): void {
    this.categories = [
      new Category(1, "City car"),
      new Category(2, "Suv"),
      new Category(3, "Van")
    ]
  }

  onSubmit() { 
    this.carService.create(this.car).subscribe
    ( result => {
      this.car = result;
      console.log("Automobile aggiunta con successo");
      this.router.navigate(['carslist']);
    })
  }
}
