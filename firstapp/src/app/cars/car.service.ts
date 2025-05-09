import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url: string = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {
  }
  public getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.url);
  }
}
