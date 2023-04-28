import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperCaseTextComponent } from './upper-case-text/upper-case-text.component';
import { LowerCaseTextComponent } from './lower-case-text/lower-case-text.component';
import { TitleCaseTextComponent } from './title-case-text/title-case-text.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseTextComponent,
    LowerCaseTextComponent,
    TitleCaseTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
