import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'NorthwindAngular';
  _displayLogin = false;

  get displayMenu() {
    return this._displayLogin;
  }
}
