import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  articles: Array<Article> = new Array<Article>();

  constructor(
    private InjectUser: UserService,
    private InjectArticle: ArticleService,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.InjectArticle.readNews().subscribe((apiArticles) => {
      this.articles = apiArticles;
    });
  }

  getArticleDetail(article: Article) {
    this.InjectArticle.article = article;
    this.Route.navigateByUrl('/article');
  }
}
