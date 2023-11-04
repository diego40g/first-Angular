import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  formLogin!: FormGroup;

  constructor(private addForm: FormBuilder, private fbAuth: AngularFireAuth) {}

  ngOnInit() {
    this.formLogin = this.addForm.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login() {
    this.fbAuth
      .signInWithEmailAndPassword(
        this.formLogin.value.email,
        this.formLogin.value.password
      )
      .then((user) => {
        console.log(user);
      });
  }
}
