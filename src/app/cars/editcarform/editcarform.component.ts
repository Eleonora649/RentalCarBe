import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Category } from '../category';

@Component({
  selector: 'app-editcarform',
  templateUrl: './editcarform.component.html',
  styleUrls: ['./editcarform.component.css']
})
export class EditCarFormComponent implements OnInit {
  car: Car;
  categories: Category[];

  constructor(private carService: CarService, private router: ActivatedRoute, private route: Router) { 
    this.car = new Car();
  }

  ngOnInit(): void {
    
    this.categories = [
      new Category(1, "City car"),
      new Category(2, "Suv"),
      new Category(3, "Van")
    ]
    this.carService.get(this.router.snapshot.params['carId']).subscribe(
      response => {
        this.car = response;
        console.log(response);
      }
    )
  }

  onSubmit() {
    this.carService.update(this.car).subscribe(
      response => {
        console.log("Automobile aggiornata con successo");
        this.car = response;
        this.route.navigate(['carslist']);
      }
    )
  }
  
}
