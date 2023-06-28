import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent {
  constructor(public InjectUser: UserService) {}
  changeName() {
    this.InjectUser.user.firstname = 'Ignacio';
  }
}
