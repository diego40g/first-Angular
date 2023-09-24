import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent {
  products: Array<Product> = new Array<Product>();
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.productsLocalStorage;
  }

  searchproduct(event: Event) {}
}
