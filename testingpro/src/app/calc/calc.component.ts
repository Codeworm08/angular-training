import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  standalone:false
})
export class CalcComponent implements OnInit {
  public res: number = 0;
  constructor(private cs: CalcService) { }
  ngOnInit() {
  }
  addNum(n1: string, n2: string) {
    {
      this.res = this.cs.add(parseInt(n1), parseInt(n2));
    }
  }
}
