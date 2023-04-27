import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-case-text',
  templateUrl: './upper-case-text.component.html',
  styleUrls: ['./upper-case-text.component.css']
})
export class UpperCaseTextComponent {
  title: string = "Hi it's a title who use upper case"
}
