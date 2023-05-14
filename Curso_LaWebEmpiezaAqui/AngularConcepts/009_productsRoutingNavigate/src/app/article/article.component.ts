import { Component } from '@angular/core';
import { Article } from '../models/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {
  articulos: Array<Article> = new Array<Article>();

  constructor(private route: Router){

  }

  ngOnInit(){
    this.articulos.push(
      {
        name: "Televisor de 72 pulgadas",
        description: "Marca LG con 4 añps de garantia",
        price: 1500,
        stock: 10,
        salerPrice: 1400
      },
      {
        name: "Laptop Asus",
        description: "Laptop nueva con 8gb de ram",
        price: 500,
        stock: 20,
        salerPrice: 400
      },
      {
        name: "Monitor",
        description: "Monitor curvo con pantalla fullHD",
        price: 800,
        stock: 60,
        salerPrice: 750
      }
    )
  }
  pastParam(articleReceived: Article){
    this.route.navigate(['detailArticle', {article: JSON.stringify(articleReceived)}])
  }
}
