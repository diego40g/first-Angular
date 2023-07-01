import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  articles: Array<Article> = new Array<Article>();

  constructor(private InjectArticle: ArticleService, private Route: Router) {}

  ngOnInit(): void {
    this.InjectArticle.readNews().subscribe((apiArticles) => {
      this.articles = apiArticles;
    });

    let sendArticle: Article = new Article();
    sendArticle.body = 'Este es el cuerpo';
    sendArticle.title = 'Esta es una prueba';
    sendArticle.userId = 4;
    this.InjectArticle.createArticle(sendArticle).subscribe((newArticle) => {
      this.articles.push(newArticle);
    });
  }

  getArticleDetail(article: Article) {
    this.InjectArticle.article = article;
    this.Route.navigateByUrl('/article');
  }

  deleteArticleDetail(id: number) {
    this.InjectArticle.deleteArticle(id).subscribe((data) => {
      console.log('Eliminado correctamente');
    });
  }
}
