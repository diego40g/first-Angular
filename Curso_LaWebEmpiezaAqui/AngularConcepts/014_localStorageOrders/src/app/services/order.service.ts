import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order | null = new Order();
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

  saveOrder() {
    let ordersList: Order[] = new Array<Order>();
    ordersList = this.orderListLocalStorage;
    this.order!.pedidoId = ordersList.length + 1;
    ordersList.push(this.order!);
    localStorage.setItem('orders', JSON.stringify(ordersList));
    localStorage.removeItem('lastOrder');
    this.order = null;
  }

  get orderListLocalStorage(): Order[] {
    let orders: Order[] = JSON.parse(localStorage.getItem('orders')!);
    if (orders === null) {
      return new Array<Order>();
    }
    return orders;
  }
}
