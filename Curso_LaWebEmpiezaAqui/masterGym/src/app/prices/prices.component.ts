import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent {
  priceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.priceForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      duration: ['', Validators.required],
      durationType: ['', Validators.required],
    });
  }

  addPlan() {
    console.log(this.priceForm.value);
  }
}
