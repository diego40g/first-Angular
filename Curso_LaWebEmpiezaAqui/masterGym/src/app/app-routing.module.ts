import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { PricesComponent } from './prices/prices.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscription',
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
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
    path: 'prices',
    component: PricesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
