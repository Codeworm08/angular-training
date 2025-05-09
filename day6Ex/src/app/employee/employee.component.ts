import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
    employee: FormGroup;

    departments: string[] = ['IT', 'HR', 'Finance', 'Sales'];
    constructor(private fb: FormBuilder){
        this.employee =this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.pattern(/^\d{10}$/)]],
            department: ['', Validators.required],
            skills: this.fb.array([])
        });
    }
    get skills(): FormArray {
        return this.employee.get('skills') as FormArray;
      }
    
      addSkill(): void {
        this.skills.push(this.fb.control('', Validators.required));
      }
    
      removeSkill(index: number): void {
        this.skills.removeAt(index);
      }
    
      get f() {
        return this.employee.controls;
      }
      onSubmit(): void {
        if (this.employee.valid) {
          alert('Form Data:' + this.employee.value);
        } else {
          this.employee.markAllAsTouched();
        }
      }
}
