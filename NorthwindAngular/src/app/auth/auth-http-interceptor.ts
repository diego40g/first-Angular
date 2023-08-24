import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError as observableThrow, catchError } from 'rxjs';
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = this.authService.getToken();
    const authRequest = req.clone({
      setHeaders: { authorization: `Bearer ${jwt}` },
    });

    return next.handle(authRequest).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.router.navigate(['/login'], {
            queryParams: { redirectUrl: this.router.routerState.snapshot.url },
          });
        }
        return observableThrow(err);
      })
    );
  }
}
