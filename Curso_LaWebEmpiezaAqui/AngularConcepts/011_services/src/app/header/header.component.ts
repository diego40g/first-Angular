import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private UserInyection: UsersService){ }

  get getUserInyection(): UsersService {
    return this.UserInyection;
  }
}
