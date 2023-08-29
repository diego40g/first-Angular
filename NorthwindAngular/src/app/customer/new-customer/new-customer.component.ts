import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { WhiteSpaceValidator } from 'src/app/shared/validators/white-space-validator';
import { NewCustomerService } from './new-customer.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.sass'],
  providers: [NewCustomerService],
})
export class NewCustomerComponent {
  newCustomerForm!: FormGroup;
  customer?: AddOrEditCustomer;

  constructor(
    private fb: FormBuilder,
    private service: NewCustomerService,
    public dialogRef: MatDialogRef<NewCustomerComponent>
  ) {}

  ngOnInit() {
    this.buildNewCustomerForm();
  }

  buildNewCustomerForm(): void {
    this.newCustomerForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
      lastName: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
      city: ['', [Validators.required, WhiteSpaceValidator.cannotContainSpace]],
      country: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
      phone: [
        '',
        [Validators.required, WhiteSpaceValidator.cannotContainSpace],
      ],
    });
  }
  save(): void {
    if (this.newCustomerForm.dirty && this.newCustomerForm.valid) {
      const p = Object.assign({}, this.customer, this.newCustomerForm.value);
      this.service.saveCustomer(p).subscribe((response) => {
        this.dialogRef.close();
      });
    } else if (!this.newCustomerForm.dirty) {
      this.newCustomerForm.reset();
    }
  }
}
