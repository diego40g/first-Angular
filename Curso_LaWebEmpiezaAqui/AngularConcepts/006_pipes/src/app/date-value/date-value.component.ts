import { Component } from '@angular/core';

@Component({
  selector: 'app-date-value',
  templateUrl: './date-value.component.html',
  styleUrls: ['./date-value.component.css']
})
export class DateValueComponent {
  today: Date = new Date();
}
