import { Component } from '@angular/core';

@Component({
  selector: 'app-event-on-model-change',
  templateUrl: './event-on-model-change.component.html',
  styleUrls: ['./event-on-model-change.component.css']
})
export class EventOnModelChangeComponent {
  inputModelChange: string = ""
  totalChange=1

  writeModel(){
    console.log(`Esto cambio ${this.totalChange+=1} veces: ${this.inputModelChange} `)
  }
}
