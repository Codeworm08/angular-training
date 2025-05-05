import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  user:string = "leo";
  email:string = "l@gmail.com"
  age:number = 30;
  likes:number = 0;
  handleLikes(count:number){
    this.likes=count;
  }
}
