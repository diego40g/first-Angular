import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import { FormsModule } from '@angular/forms';
import { EventOnModelChangeComponent } from './event-on-model-change/event-on-model-change.component';
import { EventInputComponent } from './event-input/event-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    EventOnModelChangeComponent,
    EventInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
