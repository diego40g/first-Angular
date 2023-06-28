import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = new User();
  constructor() {
    this.user.userId = 1;
    this.user.firstname = 'Diego';
    this.user.lastname = 'Paz';
  }
}
