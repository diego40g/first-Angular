import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  protected currentAuthStatus!: IAuthStatus;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.authStatus.subscribe(
      (authStatus) =>
        (this.currentAuthStatus = this.authService.getAuthStatus())
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.checkPermissions(childRoute);
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkPermissions(next);
  }

  protected checkLogin(): boolean {
    if (
      this.authService.getToken() === null ||
      this.authService.getToken() === ''
    ) {
      console.log('You must login to continue');
      alert('You must login to continue');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  protected checkPermissions(route?: ActivatedRouteSnapshot) {
    let roleMatch = true;

    if (route) {
      const expectedRole = route.data['expectedRole'];
      if (expectedRole) {
        roleMatch = this.currentAuthStatus.role === expectedRole;
      }
    }
    if (!roleMatch) {
      alert('you do not have the permissions to view this resource');
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
