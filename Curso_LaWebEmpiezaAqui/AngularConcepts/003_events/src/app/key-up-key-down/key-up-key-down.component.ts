import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up-key-down',
  templateUrl: './key-up-key-down.component.html',
  styleUrls: ['./key-up-key-down.component.css']
})
export class KeyUpKeyDownComponent {
  keyUp(event: any){
    if(event.key == "Enter"){
      console.log("keyUp - Soltar tecla")
    }
  }
  keyDown(event: any){
    if(event.key == "Enter"){
      console.log("keyDown - Precionar tecla")
    }
  }
}
