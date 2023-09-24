import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  addingLocalStorage(product: Product) {
    let oldProduct: Product[] = this.productsLocalStorage;
    product.productId = oldProduct.length + 1;
    oldProduct.push(product);
    localStorage.setItem('products', JSON.stringify(oldProduct));
  }

  get productsLocalStorage(): Product[] {
    let productToLocalStorage: Product[] | null = JSON.parse(
      localStorage.getItem('products')!
    );
    if (productToLocalStorage == null) {
      return new Array<Product>();
    }
    return productToLocalStorage;
  }
}
