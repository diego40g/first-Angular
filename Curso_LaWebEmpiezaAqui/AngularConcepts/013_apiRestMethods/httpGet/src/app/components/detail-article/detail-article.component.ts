import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.sass'],
})
export class DetailArticleComponent {
  article: Article = new Article();
  constructor(private InjectArticle: ArticleService) {
    this.article = this.InjectArticle.article;
  }
}
