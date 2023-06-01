import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  constructor(private InjectUser: UsersService){

  }
  changeName(){
    this.InjectUser.usuario.firstname="Diego"
  }
}
