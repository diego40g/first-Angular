import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass']
})
export class ArticleDetailComponent implements OnInit {
  nameArticle: string = '';
  price: number=0;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.nameArticle=this.route.snapshot.params['name'];
    this.price=this.route.snapshot.params['price'];
  }
}
