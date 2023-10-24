import { OrderDetail } from './order-detail';
import { Product } from './product';

export class Order {
  pedidoId?: number;
  clientId?: number;
  firstnameClient?: string;
  total?: number;
  orderDetail!: Array<OrderDetail>;

  constructor(datos?: Order) {
    if (datos !== null) {
      this.pedidoId = datos?.pedidoId;
      this.clientId = datos?.clientId;
      this.firstnameClient = datos?.firstnameClient;
      this.total = datos?.total;
      this.orderDetail = datos?.orderDetail!;
      return;
    }
    this.pedidoId = this.pedidoId;
    this.clientId = this.clientId;
    this.firstnameClient = this.firstnameClient;
    this.total = this.total;
    this.orderDetail = new Array<OrderDetail>();
  }

  addProduct(product: Product) {
    let pedidoDetalle: OrderDetail = new OrderDetail();
    pedidoDetalle.stock = 1;
    pedidoDetalle.nameProduct = product.name;
    pedidoDetalle.price = product.price;
    pedidoDetalle.productId = product.productId;
    pedidoDetalle.total = pedidoDetalle.stock * pedidoDetalle.price!;
    let exists: number = this.orderDetail.filter(
      (ls) => ls.productId === product.productId
    ).length;
    if (exists > 0) {
      let position: number = this.orderDetail.findIndex(
        (ls) => ls.productId === product.productId
      );
      this.orderDetail[position].stock!++;
      this.orderDetail[position].total =
        this.orderDetail[position].stock! * this.orderDetail[position].price!;
    } else {
      this.orderDetail.push(pedidoDetalle);
    }
    this.updateTotal();
  }

  private updateTotal() {
    this.total = 0;
    this.orderDetail.forEach((product) => {
      this.total! += product?.total!;
    });
  }

  public updateStockTotal(position: number) {
    this.orderDetail[position].total =
      this.orderDetail[position].stock! * this.orderDetail[position].price!;
    this.updateTotal();
  }
}
