import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor() { }
  public inc(n:number):number {
    n=n+1;
    return n;
  }
}
