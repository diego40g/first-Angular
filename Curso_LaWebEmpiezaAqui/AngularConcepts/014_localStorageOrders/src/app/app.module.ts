import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ClientComponent } from './component/client/client.component';
import { ProductComponent } from './component/product/product.component';
import { OrderComponent } from './component/order/order.component';
import { HomeComponent } from './component/home/home.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    ProductComponent,
    OrderComponent,
    HomeComponent,
    AddClientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
