import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  template: ` <p>Logging out...</p> `,
  styleUrls: [],
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
