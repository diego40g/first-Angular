import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass'],
})
export class OrderComponent {
  constructor() {}
  ngOnInit() {
    let pedido: Order = new Order();
    pedido.pedidoId = 1;
    pedido.clientId = 1;
    pedido.firstnameClient = 'Diego';
    pedido.total = 1442;
    pedido.orderDetail.push(
      {
        productId: 1,
        nameProduct: 'Maíz',
        stock: 5,
        price: 15,
        total: 75,
      },
      {
        productId: 2,
        nameProduct: 'Agua',
        stock: 1,
        price: 20,
        total: 20,
      }
    );
    console.log(pedido);
  }
}
