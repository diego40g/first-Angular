import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  article: Article = new Article();
  constructor(private http: HttpClient) {}

  readNews(): Observable<Article[]> {
    return this.http.get<Array<Article>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      'https://jsonplaceholder.typicode.com/posts',
      article
    );
  }
}
