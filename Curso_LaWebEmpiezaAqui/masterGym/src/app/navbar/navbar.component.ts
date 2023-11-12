import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  fireUser?: User;
  user: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState;
    this.user.subscribe((user) => {
      this.fireUser = user;
    });
  }
  logout() {
    this.auth.signOut();
  }
}
