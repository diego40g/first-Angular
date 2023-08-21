import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  loginError = '';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.buildLoginForm();
  }

  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  login(submittedForm: FormGroup) {
    this.authService
      .login(submittedForm.value.email, submittedForm.value.password)
      .subscribe(
        (authResponse) => {
          this.router.navigate(['/home']);
        },
        (error) => (this.loginError = error)
      );
  }
}
