import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.sass'],
})
export class FormArticleComponent {
  users: Array<User> = new Array<User>();
  formArticles!: FormGroup;
  article: Article = new Article();

  constructor(
    private InjectUser: UserService,
    private InjectArticle: ArticleService,
    private formBuilderGenerator: FormBuilder
  ) {}

  ngOnInit() {
    this.formArticles = this.formBuilderGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
    this.InjectUser.allsUsers().subscribe((receivedUser) => {
      this.users = receivedUser;
    });
  }

  addForm() {
    this.article = this.formArticles.value as Article;
    this.InjectArticle.createArticle(this.article).subscribe(
      (articleRecived) => {
        console.log(`Article was register: ${console.log(articleRecived)}`);
      }
    );
    this.formArticles.reset();
  }
}
