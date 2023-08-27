import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CustomerListComponent, NewCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class CustomerModule {}
