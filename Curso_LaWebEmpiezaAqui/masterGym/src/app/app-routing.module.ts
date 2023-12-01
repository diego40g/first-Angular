import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  {
    path: 'client-list',
    component: ClientListComponent,
  },
  {
    path: 'client-add',
    component: ClientAddComponent,
  },
  {
    path: 'client-add/:clientId',
    component: ClientAddComponent,
  },
  {
    path: 'prices', component: PricesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
