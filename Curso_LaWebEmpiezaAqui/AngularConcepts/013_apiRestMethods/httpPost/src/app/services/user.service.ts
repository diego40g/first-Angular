import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User = new User();
  constructor(private http: HttpClient) {}

  readUser(userId: number): Observable<User> {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
