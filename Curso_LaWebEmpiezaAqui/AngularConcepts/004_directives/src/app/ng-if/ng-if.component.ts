import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit{
  loading: boolean = true;

  ngOnInit(){
    setTimeout(() => {
      this.loading=false
    }, 3000)
  }

  reload(){
    this.loading=!this.loading;
  }
}
