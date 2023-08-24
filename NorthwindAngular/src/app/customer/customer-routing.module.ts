import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role';

const customerRoutes: Routes = [
  {
    path: '',
    title: 'Customer',
    children: [
      {
        path: '',
        component: CustomerListComponent,
      },
    ],
    canActivate: [AuthGuard],
    data: { expectedRole: Role.AdminSupplier },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
