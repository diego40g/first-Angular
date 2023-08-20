import { Injectable } from '@angular/core';
import { Role } from './role';
import {
  BehaviorSubject,
  Observable,
  map,
  catchError,
  throwError as observableThrowError,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { transformError } from '../common/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;
  authStatus = new BehaviorSubject<IAuthStatus>(defaulAuthStatus);

  constructor(private httpClient: HttpClient) {
    this.authProvider = this.userAuthProvider;
  }
  private userAuthProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    return this.httpClient.post<IServerAuthResponse>(
      `${environment.urlService}/token`,
      { email: email, password: password }
    );
  }

  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();

    const loginResponse = this.authProvider(email, password).pipe(
      map((value) => {
        const result = jwt_decode(value.access_Token);
        return result as IAuthStatus;
      }),
      catchError(transformError)
    );
    loginResponse.subscribe(
      (res) => {
        this.authStatus.next(res);
      },
      (err) => {
        this.logout();
        return observableThrowError(err);
      }
    );
    return loginResponse;
  }
  logout() {
    this.authStatus.next(defaulAuthStatus);
  }
}

export interface IAuthStatus {
  role: Role;
  primarysid: number | null;
  unique_name: string | null;
}

interface IServerAuthResponse {
  access_Token: string;
}

const defaulAuthStatus: IAuthStatus = {
  role: Role.None,
  primarysid: null,
  unique_name: null,
};
