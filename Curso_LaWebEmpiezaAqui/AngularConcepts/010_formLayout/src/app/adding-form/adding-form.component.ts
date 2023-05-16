import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User{
  firstName: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.sass']
})
export class AddingFormComponent implements OnInit {
  newForm!: FormGroup;
  users: Array<User> = new Array<User>;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.newForm = this.formBuilder.group({
      firstName: ['Diego', Validators.required],
      email: ['',Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  adding(){
    this.users.push(this.newForm.value as User)
    this.newForm.reset()
  }
}
