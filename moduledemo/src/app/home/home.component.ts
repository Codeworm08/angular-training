import { Component } from '@angular/core';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private ps:PaymentService){
      ps.makepayment();
  }

}
