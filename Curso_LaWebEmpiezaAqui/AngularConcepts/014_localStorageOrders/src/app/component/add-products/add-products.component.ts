import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass'],
})
export class AddProductsComponent {
  addForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addProduct() {}
}
