import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  imports: [FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  n1:WritableSignal<string>=signal('0');
  n2:WritableSignal<string>=signal('0');
  res:Signal<number> = computed<number>(()=>  parseInt(this.n1())+parseInt(this.n2()));
  
}
