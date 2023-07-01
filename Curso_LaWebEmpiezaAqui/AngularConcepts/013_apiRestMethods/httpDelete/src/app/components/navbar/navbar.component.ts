import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  constructor(private UserInyection: UserService) {}

  get getUserInyection(): UserService {
    return this.UserInyection;
  }

  changeName() {
    this.UserInyection.user.name = 'Ismael';
  }
}
