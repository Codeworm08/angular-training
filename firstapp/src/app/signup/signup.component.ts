import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
   templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{
  signupform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupform = this.fb.group({
      fname: [''],
      emails: this.fb.array([this.fb.control('')])
    })     
  }

  public save(): void {
    alert(this.signupform.get('fname')?.value + " : " + this.signupform.get('emails')?.value);
  }
  public get emails() {
    return this.signupform.get('emails') as FormArray;
  }

  public addEmail() {
    this.emails.push(this.fb.control(''));
  }
}
