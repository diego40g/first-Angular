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
  numberOfRecords: number = 0;
  pageSizeOptions: number[] = [12, 24, 48];
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor(private customerServie: CustomerService) {
    this.getCustomer(1, this.pageSize);
  }

  getCustomer(page: number, rows: number): void {
    this.customerServie
      .getCustomerList(page, rows)
      .subscribe(
        (response) => (
          (this.customers = response),
          (this.numberOfRecords = response[0].totalRecords)
        )
      );
  }
  changePage(event: any): void {
    this.getCustomer(event.pageIndex + 1, event.pageSize);
  }
}
