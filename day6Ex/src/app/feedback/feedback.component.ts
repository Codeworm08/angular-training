import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
    username: string = '';
    rating: number = 0;
    comments: string = '';
    recommend: boolean = false;
    msg: string = '';
    public giveFeedback():void{
        let rec:string = this.recommend? "Yes":"No";
        this.msg = 'Thank You ' + this.username + '!' + '\nRating: ' + this.rating + '\nComments: ' + this.comments + '\nRecommended: ' + rec;
    }
}
