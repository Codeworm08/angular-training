import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('login') == null)
  {
    alert('Please login..');
    return false;
  }
  else
    return true;
}
