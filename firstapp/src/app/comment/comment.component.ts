import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: false,
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  @Output()
  private add:EventEmitter<string> = new EventEmitter();
  public addComment(cmt:string) : void
  {
   this.add.emit(cmt);

  }
}
