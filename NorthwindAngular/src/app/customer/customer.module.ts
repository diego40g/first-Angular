import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';

@NgModule({
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class CustomerModule {}
