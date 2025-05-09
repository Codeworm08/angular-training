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
  newcar: Car = { id: '', make: '', model: '', variant: '' };
  constructor(private carService: CarService) {
  }
  ngOnInit(): void {
    this.load();
  }
  public load(): void {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    });
  }
  public save(): void {
    this.carService.saveCar(this.newcar).subscribe(data => {
      alert(data.make + " saved...");
      this.load();
      this.newcar = { id: '', make: '', model: '', variant: '' };
    });
  }

  public del(id: string) {
    this.carService.deleteCar(id).subscribe(data => {
      alert(data.make + " deleted...");
      this.load();
    });
  }
}
