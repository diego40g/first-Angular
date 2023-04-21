import { Component } from '@angular/core';

@Component({
  selector: 'app-event-mouse',
  templateUrl: './event-mouse.component.html',
  styleUrls: ['./event-mouse.component.css']
})
export class EventMouseComponent {
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
