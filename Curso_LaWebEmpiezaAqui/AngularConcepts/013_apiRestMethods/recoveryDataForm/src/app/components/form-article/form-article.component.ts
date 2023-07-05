import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { User } from 'src/app/models/user';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.sass'],
})
export class FormArticleComponent {
  users: Array<User> = new Array<User>();
  formArticles!: FormGroup;
  article: Article = new Article();
  isNew: boolean = false;
  title: string | null = '';

  constructor(
    private InjectUser: UserService,
    private InjectArticle: ArticleService,
    private formBuilderGenerator: FormBuilder,
    private ActiveRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isNew = JSON.parse(this.ActiveRoute.snapshot.params['isNew']);
    this.title = this.isNew ? 'Add' : 'Update';
    //this.title = this.ActiveRoute.snapshot.paramMap.get('isNew');
    this.formArticles = this.formBuilderGenerator.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
    if (!this.isNew) {
      this.article = this.InjectArticle.article;
      this.formArticles.setValue({
        title: this.article.title,
        body: this.article.body,
        userId: this.article.userId,
      });
    }
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

  updateForm() {
    /*this.article = this.formArticles.value as Article;
    this.article.id = this.InjectArticle.article.id;*/
    this.article.body = this.formArticles.value.body;
    this.article.title = this.formArticles.value.title;
    this.article.userId = this.formArticles.value.userId;
    this.InjectArticle.updateArticle(this.article).subscribe(
      (articleRecibe) => {
        console.log(articleRecibe);
        console.log('Se edito correctamente');
      }
    );
  }
}
