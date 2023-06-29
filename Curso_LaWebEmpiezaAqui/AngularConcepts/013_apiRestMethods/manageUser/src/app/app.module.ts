import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, ArticleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ArticleService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
