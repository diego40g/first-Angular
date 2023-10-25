import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent {
  products: Array<Product> = new Array<Product>();
  constructor(
    public productService: ProductService,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.products = this.productService.productsLocalStorage;
  }

  searchproduct(event: Event) {
    const target = event.target as HTMLInputElement;
    const searchWord: string = target.value;
    this.products = this.productService.productsLocalStorage.filter(
      (product) => {
        const searchName = product.name?.toLocaleLowerCase() || '';
        const searchDescription =
          product.description?.toLocaleLowerCase() || '';

        return (
          searchName.includes(searchWord.toLowerCase()) ||
          searchDescription.includes(searchWord.toLowerCase()) ||
          product.price?.toString().includes(searchWord.toLowerCase()) ||
          product.productId?.toString().includes(searchWord.toLowerCase())
        );
      }
    );
  }

  add(product: Product) {
    this.orderService.order?.addProduct(product);
    this.orderService.saveLocalStorage();
    console.log(this.orderService.order);
  }
}
