import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: Array<Car> = [];
  constructor(private carService: CarService) {
  }
  ngOnInit(): void {
    this.load();
  }
  public load():void {
      this.carService.getCars().subscribe(data=>{
        this.cars = data;
        
      });
  }

}
