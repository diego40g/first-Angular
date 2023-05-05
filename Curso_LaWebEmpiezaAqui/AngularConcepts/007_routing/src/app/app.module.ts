import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import { PipesComponent } from './pipes/pipes.component';
import { TextContinuePipe } from './text-continue.pipe';
import { FormsModule } from '@angular/forms';
import { FormsBoostrapComponent } from './forms-boostrap/forms-boostrap.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    PipesComponent,
    TextContinuePipe,
    FormsBoostrapComponent,
    NotFoundComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
