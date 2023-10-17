import { Component } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass'],
  providers: [OrderDetailService],
})
export class OrderDetailComponent {
  orderId?: number;
  orderItem: OrderList = new OrderList();
  public detailColumns: object[] = [];
  constructor(
    private service: OrderDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'];
    });
  }
}
