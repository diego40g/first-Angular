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
  editPosition: number = -1;
  itsNew: boolean = true;
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

  edit(position: number){
    this.itsNew=!this.itsNew;
    this.editPosition = position;
    this.newForm.setValue({
      firstName: this.users[position].firstName,
      email: this.users[position].email,
      password: this.users[position].password
    })
  }

  update(){
    this.users[this.editPosition].firstName=this.newForm.value.firstName
    this.users[this.editPosition].email=this.newForm.value.email
    this.users[this.editPosition].password=this.newForm.value.password
    this.newForm.reset()
    this.itsNew = !this.itsNew;
    this.editPosition = -1;
  }
}
