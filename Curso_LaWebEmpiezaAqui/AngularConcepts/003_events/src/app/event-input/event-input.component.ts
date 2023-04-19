import { Component } from '@angular/core';

@Component({
  selector: 'app-event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.css']
})
export class EventInputComponent {
  write(event: Event){
    console.log((event.target as HTMLInputElement).value)
  }
}
