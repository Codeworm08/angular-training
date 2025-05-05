import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor() { }
  public makepayment(){
    alert('Payment done using default method....')
  }

}
