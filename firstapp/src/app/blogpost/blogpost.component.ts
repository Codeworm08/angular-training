import { Component } from '@angular/core';

@Component({
  selector: 'app-blogpost',
  standalone: false,
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css'
})
export class BlogpostComponent {
  public comments:Array<string> =[];
  public processComment(cmt:string) : void {
    this.comments.push(cmt);
  }
}
