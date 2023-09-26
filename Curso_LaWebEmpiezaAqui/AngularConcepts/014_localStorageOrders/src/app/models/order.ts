import { OrderDetail } from './order-detail';

export class Order {
  clientId?: number;
  firstnameClient?: string;
  total?: number;
  orderDetail?: Array<OrderDetail>;

  constructor() {
    this.clientId = this.clientId;
    this.firstnameClient = this.firstnameClient;
    this.total = this.total;
    this.orderDetail = new Array<OrderDetail>();
  }
}
