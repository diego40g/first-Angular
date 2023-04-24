import { Component } from '@angular/core';

interface Product{
  name: string;
  stock: number;
  creator: string;
  dueDate: Date;
  isImportant: boolean;
  isBigText: boolean;
}

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  products: Array<Product> = [
    {
      name: "Rice",
      stock: 15,
      creator: "Industrial Distribution",
      dueDate: new Date('04/25/2023'),
      isImportant: true,
      isBigText: true
    },
    {
      name: "Rice",
      stock: 15,
      creator: "Industrial Distribution",
      dueDate: new Date('04/25/2023'),
      isImportant: false,
      isBigText: true
    }
  ]

  showSquart: boolean = false;
  changeBackground(){
    this.showSquart = !this.showSquart;
  }
}
