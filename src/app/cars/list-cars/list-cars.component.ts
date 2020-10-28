import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  car: Car[];
//config: MyTableConfig; 

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.retrieveCars();
  }
  
  retrieveCars(): void {
    this.carService.getAll().subscribe( cars => {
      this.car = cars;
      console.log(cars);  
    },
      error => {console.log(error);
      });
  }

  delete(id) {
    this.carService.delete(this.carService.get(id)).subscribe ( result => {
      console.log(result);
    })
  }

  update(car: Car) {
    this.carService.update(car).subscribe ( result => {
        console.log(result);
      })
  }

}
