import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usuario: User = new User();
  constructor() {
    this.usuario.userId=1;
    this.usuario.firstname="Diego";
    this.usuario.lastname="Paz";
  }
}
