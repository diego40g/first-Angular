import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass'],
  providers: [CustomerService],
})
export class CustomerListComponent {
  customers: Customer[] = [];
  constructor(private customerServie: CustomerService) {
    this.getCustomer(1, 20);
  }

  getCustomer(page: number, rows: number): void {
    this.customerServie
      .getCustomerList(page, rows)
      .subscribe((response) => (this.customers = response));
  }
}
