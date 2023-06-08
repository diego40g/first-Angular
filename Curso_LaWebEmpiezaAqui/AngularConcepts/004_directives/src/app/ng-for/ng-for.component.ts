import { Component } from '@angular/core';

interface Product{
  name: string;
  stock: number;
  creator: string;
  dueDate: Date;
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  firstNames: Array<string> = ["Ana","Diego","Ismael","Richard"]

  products: Array<Product> = [
    {
      name: "Rice",
      stock: 15,
      creator: "Industrial Distribution",
      dueDate: new Date('04/25/2023')
    },
    {
      name: "Soda",
      stock: 200,
      creator: "coca Cola",
      dueDate: new Date('01/15/2024')
    }
  ]
}
