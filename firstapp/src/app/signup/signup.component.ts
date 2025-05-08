import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
frm:FormGroup;
constructor(){
  this.frm = new FormGroup({
    fname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
  })
}

public doSignup():void {
  alert(this.frm.get('fname')?.value + " , " + this.frm.get('email')?.value);
}
}
