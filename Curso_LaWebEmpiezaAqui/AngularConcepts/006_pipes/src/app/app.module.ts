import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperCaseTextComponent } from './upper-case-text/upper-case-text.component';
import { LowerCaseTextComponent } from './lower-case-text/lower-case-text.component';
import { TitleCaseTextComponent } from './title-case-text/title-case-text.component';
import { CurrencyMoneyComponent } from './currency-money/currency-money.component';
import { PercentValueComponent } from './percent-value/percent-value.component';
import { DateValueComponent } from './date-value/date-value.component';
import { OurOwnPipeComponent } from './our-own-pipe/our-own-pipe.component';
import { TextContinuePipe } from './text-continue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseTextComponent,
    LowerCaseTextComponent,
    TitleCaseTextComponent,
    CurrencyMoneyComponent,
    PercentValueComponent,
    DateValueComponent,
    OurOwnPipeComponent,
    TextContinuePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
