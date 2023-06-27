import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private UserInyection: UserService) {}

  get getUserInyection(): UserService {
    return this.UserInyection;
  }

  changeName() {
    this.UserInyection.user.firstname = 'Ismael';
  }
}
