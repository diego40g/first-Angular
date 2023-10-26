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
import { ClientService } from './services/client.service';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { OrderListComponent } from './component/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    ProductComponent,
    OrderComponent,
    HomeComponent,
    AddClientComponent,
    AddProductsComponent,
    OrderListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ClientService, ProductService, OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
