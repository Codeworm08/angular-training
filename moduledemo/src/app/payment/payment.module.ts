import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { NetbankingComponent } from './netbanking/netbanking.component';
import { UpiComponent } from './upi/upi.component';



@NgModule({
  declarations: [
    CreditcardComponent,
    NetbankingComponent,
    UpiComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    CreditcardComponent,
    NetbankingComponent,
    UpiComponent
  ]
})
export class PaymentModule { }
