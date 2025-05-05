import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public uid: string ='';
  constructor(private ar:ActivatedRoute){
    ar.params.subscribe(p=>{
      this.uid = p['uid']
    });
  } 

}
