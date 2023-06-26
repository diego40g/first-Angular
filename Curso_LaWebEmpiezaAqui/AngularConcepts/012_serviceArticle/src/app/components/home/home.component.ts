import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();

  constructor(
    private InjectUser: UserService,
    private InjectArticle: ArticleService,
    private Route: Router
  ) {}

  ngOnInit(): void {
    this.articles.push(
      {
        title: 'Curso de Net Core',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus felis. Phasellus non volutpat erat, in luctus urna. Curabitur blandit risus a fringilla pellentesque. Sed sed posuere metus. Donec vestibulum eros auctor, ultricies lectus ac, ultrices ligula. Sed tincidunt, nunc sit amet efficitur tincidunt, nibh nibh venenatis nisi, eget rhoncus justo orci a neque. Integer consequat, ex vitae fermentum luctus, est eros ultrices elit, a tempus ex ligula id neque. Integer ac ligula auctor, suscipit neque id, laoreet justo. Maecenas vel ex metus. Cras placerat tellus at lectus posuere bibendum. Sed aliquet mi in cursus hendrerit. Proin ut orci non ante consequat volutpat. Nam posuere interdum ullamcorper. Aliquam non tincidunt odio, id vulputate ipsum.',
        date: new Date(),
        user: `${this.InjectUser.usuario.firstname} ${this.InjectUser.usuario.lastname}`,
      },
      {
        title: 'Curso de Angular',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus felis. Phasellus non volutpat erat, in luctus urna. Curabitur blandit risus a fringilla pellentesque. Sed sed posuere metus. Donec vestibulum eros auctor, ultricies lectus ac, ultrices ligula. Sed tincidunt, nunc sit amet efficitur tincidunt, nibh nibh venenatis nisi, eget rhoncus justo orci a neque. Integer consequat, ex vitae fermentum luctus, est eros ultrices elit, a tempus ex ligula id neque. Integer ac ligula auctor, suscipit neque id, laoreet justo. Maecenas vel ex metus. Cras placerat tellus at lectus posuere bibendum. Sed aliquet mi in cursus hendrerit. Proin ut orci non ante consequat volutpat. Nam posuere interdum ullamcorper. Aliquam non tincidunt odio, id vulputate ipsum.',
        date: new Date('04/25/2019'),
        user: `${this.InjectUser.usuario.firstname} ${this.InjectUser.usuario.lastname}`,
      },
      {
        title: 'Curso de Flutter',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus felis. Phasellus non volutpat erat, in luctus urna. Curabitur blandit risus a fringilla pellentesque. Sed sed posuere metus. Donec vestibulum eros auctor, ultricies lectus ac, ultrices ligula. Sed tincidunt, nunc sit amet efficitur tincidunt, nibh nibh venenatis nisi, eget rhoncus justo orci a neque. Integer consequat, ex vitae fermentum luctus, est eros ultrices elit, a tempus ex ligula id neque. Integer ac ligula auctor, suscipit neque id, laoreet justo. Maecenas vel ex metus. Cras placerat tellus at lectus posuere bibendum. Sed aliquet mi in cursus hendrerit. Proin ut orci non ante consequat volutpat. Nam posuere interdum ullamcorper. Aliquam non tincidunt odio, id vulputate ipsum.',
        date: new Date('05/10/2022'),
        user: `${this.InjectUser.usuario.firstname} ${this.InjectUser.usuario.lastname}`,
      }
    );
  }

  getArticleDetail(article: Article) {
    this.InjectArticle.article = article;
    this.Route.navigateByUrl('/article');
  }
}
