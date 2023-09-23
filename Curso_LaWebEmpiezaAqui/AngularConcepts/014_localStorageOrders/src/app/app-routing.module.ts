import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './component/client/client.component';
import { ProductComponent } from './component/product/product.component';
import { OrderComponent } from './component/order/order.component';
import { HomeComponent } from './component/home/home.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { AddProductsComponent } from './component/add-products/add-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addclient',
    component: AddClientComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
  },
  {
    path: 'add-product',
    component: AddProductsComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
