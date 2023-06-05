import { Component, OnInit } from '@angular/core';

interface Article{
  name: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit{
  articulos: Array<Article> = new Array<Article>();

  ngOnInit(){
    this.articulos.push(
      {
        name: "Televisor de 72 pulgadas",
        description: "Marca LG con 4 añps de garantia",
        price: 1500
      },
      {
        name: "Laptop Asus",
        description: "Laptop nueva con 8gb de ram",
        price: 500
      },
      {
        name: "Monitor",
        description: "Monitor curvo con pantalla fullHD",
        price: 800
      }
    )
  }
}
