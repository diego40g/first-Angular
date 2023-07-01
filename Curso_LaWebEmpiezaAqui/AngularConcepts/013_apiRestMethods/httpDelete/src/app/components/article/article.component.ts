import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass'],
})
export class ArticleComponent {
  article: Article = new Article();
  user: User = new User();
  constructor(
    private InjectArticle: ArticleService,
    private InjectUser: UserService
  ) {
    this.article = this.InjectArticle.article;
  }

  ngOnInit() {
    this.InjectUser.readUser(this.article.userId!).subscribe((userApi) => {
      this.user = userApi;
    });
  }
}
