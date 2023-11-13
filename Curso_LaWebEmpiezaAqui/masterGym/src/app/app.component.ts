import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'masterGym';
  user: Observable<any>;
  fireUser?: User;
  load: boolean = false;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState;
    this.user.subscribe((user) => {
      setTimeout(() => {
        this.load = false;
        this.fireUser = user;
      }, 1000);
    });
  }

  login() {
    //this.auth.signInWithPopup(new GoogleAuthProvider());
    this.auth.signInWithEmailAndPassword('test@test.com', '1234567890');
  }
}
