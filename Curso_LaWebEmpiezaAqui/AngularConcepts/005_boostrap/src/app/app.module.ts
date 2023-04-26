import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoostrapExampleComponent } from './boostrap-example/boostrap-example.component';
import { BoostrapFormComponent } from './boostrap-form/boostrap-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BoostrapExampleComponent,
    BoostrapFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
