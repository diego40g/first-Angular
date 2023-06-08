import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit{
  firstName: string = "Diego";

  student: any = {
    firstName: "Ismael",
    lastName: "Paz",
    age: 22
  }

  image: string = 'https://static.thenounproject.com/png/102903-200.png'
  inputValue: string = "Hello I'm new input"

  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit() {

  }

  login(){
    console.log(this.email, '/', this.password)
  }
}
