import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.sass'],
})
export class AddProductsComponent {
  addForm!: FormGroup;
  product: Product = new Product();

  constructor(private fb: FormBuilder, public productService: ProductService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  addProduct() {
    this.productService.addingLocalStorage(this.addForm.value);
    this.addForm.reset();
  }
}
