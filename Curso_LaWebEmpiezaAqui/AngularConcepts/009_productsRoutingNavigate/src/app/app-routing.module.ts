import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {path: 'article', component: ArticleComponent},
  {path: 'detailArticle', component: ArticleDetailComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
