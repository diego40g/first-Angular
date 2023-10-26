import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass'],
})
export class OrderListComponent {
  orderList: Order[] = new Array<Order>();
  constructor(public orderService: OrderService) {}

  ngOnInit() {
    this.orderList = this.orderService.orderListLocalStorage;
  }
}
