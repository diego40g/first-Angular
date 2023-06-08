import { Component } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.sass']
})
export class TitlesComponent {
  email: string = ''
  password: string = ''

  login(){
    alert('Ha precionado doble click')
  }

  maxSize(event: any){
    event.srcElement.style.width='1000px'
    event.srcElement.style.heigth='400px'
    event.srcElement.style.border='1px solid orange'
  }
  minSize(event: any){
    event.srcElement.style.width='500px'
    event.srcElement.style.heigth='200px'
    event.srcElement.style.border='1px solid green'
  }
}
