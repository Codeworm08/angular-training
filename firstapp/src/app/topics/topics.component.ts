import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  standalone: false,
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {
  topics :Array<string> = ['Angular','React'];

  public add(v:any): void {
    this.topics.push(v.value);
    v.value='';
    v.setFocus();
 
  }
}
