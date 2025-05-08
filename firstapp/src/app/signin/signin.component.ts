import { Component } from '@angular/core';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  login: string = '';
  password: string = '';
  msg: string = '';

  public constructor(private ss: SigninService,private router:Router) {

  }
  public doSignIn(): void {
    if (this.ss.checkUser(this.login, this.password))
    {
      sessionStorage.setItem('login',this.login);
      this.router.navigate(['']);
    }
    else
      this.msg = 'Invalid login/password';

  }
}
