import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperCaseTextComponent } from './upper-case-text/upper-case-text.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
