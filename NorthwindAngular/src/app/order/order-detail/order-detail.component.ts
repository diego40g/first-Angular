import { ChangeDetectorRef, Component } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';
import { Column } from 'src/app/shared/table-view/table-view.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.sass'],
  providers: [OrderDetailService],
})
export class OrderDetailComponent {
  orderId?: number;
  orderItem: OrderList = new OrderList();
  public detailColumns: Column[] = [];
  constructor(
    private service: OrderDetailService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'];
    });
  }

  ngAfterViewInit() {
    this.detailColumns = this.getDetailsColumns();
    this.ref.detectChanges(); //detectar cambios en el html
  }

  getOrderById(orderId: number): void {
    this.service.getOrderById(orderId).subscribe((response) => {
      this.orderItem = response;
    });
  }

  private getDetailsColumns(): Column[] {
    return [
      {
        name: 'Product',
        flexGrow: 0.5,
        prop: 'productName',
      },
      {
        name: 'unitPrice',
        prop: 'unitPrice',
        flexGrow: 0.5,
      },
      {
        name: 'quantity',
        prop: 'quantity',
        flexGrow: 0.5,
      },
    ];
  }
}
