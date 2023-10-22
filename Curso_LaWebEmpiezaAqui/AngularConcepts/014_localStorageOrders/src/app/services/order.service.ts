import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order = new Order();
  constructor() {
    this.order = this.lastOrder;
  }

  saveLocalStorage() {
    localStorage.setItem('lastOrder', JSON.stringify(this.order));
  }

  get lastOrder(): Order {
    let orderLocalStorage: Order = new Order(
      JSON.parse(localStorage.getItem('lastOrder')!)
    );
    if (orderLocalStorage === null) {
      return new Order();
    }
    return orderLocalStorage;
  }
}
