import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/articulo';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass']
})
export class ArticleDetailComponent {
  article: Article | undefined;
  constructor(private routeActive: ActivatedRoute){

  }

  ngOnInit(){
    console.log(this.routeActive.snapshot.params['article']);
  }
}
