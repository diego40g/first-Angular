import { Component, Inject } from '@angular/core';
import { DetailCustomerService } from './detail-customer.service';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.sass'],
  providers: [DetailCustomerService],
})
export class DetailCustomerComponent {
  customer: AddOrEditCustomer = new AddOrEditCustomer();
  constructor(
    private service: DetailCustomerService,
    public dialogRef: MatDialogRef<DetailCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.customerRetrieved(data.id);
  }

  customerRetrieved(id: number): void {
    this.service
      .getCustomerById(id)
      .subscribe((response: AddOrEditCustomer) => {
        this.customer = response;
      });
  }
}
