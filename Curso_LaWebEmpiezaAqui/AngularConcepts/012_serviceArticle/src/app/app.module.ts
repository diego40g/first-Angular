import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { UserService } from './service/user.service';
import { ArticleService } from './service/article.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    DetailArticleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService, ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
