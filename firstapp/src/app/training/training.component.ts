import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: false,
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

  @Input()
  public name:string='';
  @Input()
  public duration:string='';
  @Input()
  public timing:string='';
  public logo='anglogo.jpeg';
}
