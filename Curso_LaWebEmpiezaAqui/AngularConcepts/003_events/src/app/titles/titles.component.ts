import { Component } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {
  email: string = ''
  password: string = ''

  login(){
    alert('Ha precionado doble click')
  }
}
