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

  constructor() {}

  ngOnInit() {

  }
}
