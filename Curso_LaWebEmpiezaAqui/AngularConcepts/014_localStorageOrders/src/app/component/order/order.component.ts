import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass'],
})
export class OrderComponent {
  constructor(public orderService: OrderService) {}
  ngOnInit() {
    this.orderService.order;
  }
  totalCalculate(position: number) {
    this.orderService.order.orderDetail[position].total =
      this.orderService.order.orderDetail[position].stock! *
      this.orderService.order.orderDetail[position].price!;
  }
}
