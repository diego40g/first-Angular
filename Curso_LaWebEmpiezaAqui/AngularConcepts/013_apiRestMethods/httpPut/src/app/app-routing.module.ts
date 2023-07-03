import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArticleComponent } from './components/form-article/form-article.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
  {
    path: 'add-article',
    component: FormArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
