import { Component } from '@angular/core';

@Component({
  selector: 'app-event-focus',
  templateUrl: './event-focus.component.html',
  styleUrls: ['./event-focus.component.css']
})
export class EventFocusComponent {
  colorBackground(event: any){
    event.srcElement.style.background = "red";
    event.srcElement.style.width = "200px";
  }
}
