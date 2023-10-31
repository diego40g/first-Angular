import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'masterGym';
  user: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState;
    this.user.subscribe((user) => {
      console.log(user);
    });
  }

  login() {
    //this.auth.signInWithPopup(new GoogleAuthProvider());
    this.auth.signInWithEmailAndPassword('test@test.com', '1234567890');
  }
  logout() {
    this.auth.signOut();
  }
}
