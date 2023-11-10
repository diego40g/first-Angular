import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  formLogin!: FormGroup;
  correctData: boolean = true;
  errorText: string = '';

  constructor(
    private addForm: FormBuilder,
    private fbAuth: AngularFireAuth,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.formLogin = this.addForm.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.formLogin.valid) {
      this.correctData = true;
      this.spinner.show();
      this.fbAuth
        .signInWithEmailAndPassword(
          this.formLogin.value.email,
          this.formLogin.value.password
        )
        .then((user) => {
          console.log(user);
          this.spinner.hide();
        })
        .catch((error) => {
          this.correctData = false;
          this.errorText = error.message;
          this.spinner.hide();
        });
    } else {
      this.correctData = false;
      this.errorText = 'Please, check of information was correct';
    }
  }
}
