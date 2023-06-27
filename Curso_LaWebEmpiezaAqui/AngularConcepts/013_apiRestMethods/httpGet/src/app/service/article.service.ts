import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  article: Article = new Article();
  constructor(private http: HttpClient) {}

  readNews(): Observable<Article[]> {
    //this.http.get<Article[]>('')
    return this.http.get<Array<Article>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
