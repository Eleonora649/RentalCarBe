import { Injectable } from '@angular/core';

import { Car } from './car';
import { CAR } from './mock-car';
import { HEADERSCAR } from './mock-header-car';
import { MyTableConfig } from '../components/table/table-config.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  car: Car[];

  getCar(): Car[] {
    console.log(CAR);
    return CAR;  
  }
  getHeadersCar(): MyTableConfig {
    return HEADERSCAR;
}


}
/*  deleteCar(id){
    for(let i = 0; i < this.car.length; ++i){
      if (this.car[i].id === id) {
        this.car.splice(i,1);
      }
    }
  }
*/