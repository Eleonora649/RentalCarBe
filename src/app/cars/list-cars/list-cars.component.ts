import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { MyTableConfig } from 'src/app/components/table/table-config.component';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  data: Car[];
  config: MyTableConfig; 

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.data = this.carService.getCar();
    console.log(this.data);
  
    this.config = this.carService.getHeadersCar();
  }

}
