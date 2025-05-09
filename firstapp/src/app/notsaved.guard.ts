import { CanDeactivateFn } from '@angular/router';

export const notsavedGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if (prompt('Unsaved data on the form !!! continue (y/n) :') == 'y')
    return true;
  else
    return false;
};
