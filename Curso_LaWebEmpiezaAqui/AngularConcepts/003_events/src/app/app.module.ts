import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitlesComponent } from './titles/titles.component';
import { FormsModule } from '@angular/forms';
import { EventOnModelChangeComponent } from './event-on-model-change/event-on-model-change.component';
import { EventInputComponent } from './event-input/event-input.component';
import { EventFocusComponent } from './event-focus/event-focus.component';
import { KeyUpKeyDownComponent } from './key-up-key-down/key-up-key-down.component';
import { EventMouseComponent } from './event-mouse/event-mouse.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesComponent,
    EventOnModelChangeComponent,
    EventInputComponent,
    EventFocusComponent,
    KeyUpKeyDownComponent,
    EventMouseComponent,
    DirectiveNgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
