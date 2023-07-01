import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { FormArticleComponent } from './components/form-article/form-article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './service/user.service';
import { ArticleService } from './service/article.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    FormArticleComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ArticleService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
