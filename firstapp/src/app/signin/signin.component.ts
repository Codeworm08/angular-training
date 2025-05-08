import { Component } from '@angular/core';
import { SigninService } from './signin.service';

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

  public constructor(private ss: SigninService) {

  }
  public doSignIn(): void {
    if (this.ss.checkUser(this.login, this.password))
      this.msg = 'Welcome ' + this.login;
    else
      this.msg = 'Invalid login/password';

  }
}
