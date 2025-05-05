import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name:string = '';
  @Input() email:string = '';
  @Input() age:number = 0;
  count:number = 0;
  constructor(){
    this.count=0;
  }
  
  @Output() likeEvent = new EventEmitter<number>();

  increaseLike(){
    this.count+=1
    this.likeEvent.emit(this.count)
  }
}
