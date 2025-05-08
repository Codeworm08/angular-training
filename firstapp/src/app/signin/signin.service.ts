import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public checkUser(login: string, password: string): boolean {
    if (login == 'John' && password == '123')
      return true;
    else
      return false
  }
}
