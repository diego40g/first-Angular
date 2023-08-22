import { CanActivateFn, CanActivateChildFn, CanLoadFn } from '@angular/router';

export const AuthGuard: CanActivateFn | CanActivateChildFn | CanLoadFn = (
  route,
  state
) => {
  return true;
};
