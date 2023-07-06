import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './component/client/client.component';
import { ProductComponent } from './component/product/product.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
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
