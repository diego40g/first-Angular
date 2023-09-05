import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';
import {
  Column,
  TableViewComponent,
} from 'src/app/shared/table-view/table-view.component';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.sass'],
  providers: [OrderContainerService],
})
export class OrderContainerComponent {
  items: OrderList[] = [];
  numberOfRecords? = 0;
  public columns: Column[] = [];
  public detailColumns: object[] = [];

  @ViewChild('tableView') tableView!: TableViewComponent<any>;
  @ViewChild('orderIdCellTemplate')
  private orderIdCellTemplate!: TemplateRef<any>;

  constructor(
    private ref: ChangeDetectorRef,
    private service: OrderContainerService
  ) {}

  ngOnInit() {
    this.getOrders(1, 10);
    this.columns = this.getColumns();
    this.detailColumns = this.getDetailsColumns();
  }

  getOrders(page: number, rows: number): void {
    this.service.getOrderList(page, rows).subscribe((response) => {
      this.items = response;
      this.numberOfRecords = response[0].totalRecords;
    });
  }

  private getColumns(): Column[] {
    return [
      {
        name: 'Id',
        flexGrow: 0.5,
        prop: 'orderId',
      },
      {
        name: 'Customer',
        prop: 'customer',
        flexGrow: 1,
      },
      {
        name: 'Total',
        prop: 'totalAmount',
        flexGrow: 0.5,
      },
      {
        name: '# Order',
        prop: 'orderNumber',
        flexGrow: 0.5,
      },
    ];
  }

  private getDetailsColumns(): object[] {
    return [
      {
        name: 'Product',
        flexGrow: 0.5,
        cellTemplate: this.orderIdCellTemplate,
      },
      {
        name: 'unitPrice',
        flexGrow: 0.5,
        prop: 'unitPrice',
      },
      {
        name: 'quantity',
        flexGrow: 0.5,
        prop: 'quantity',
      },
    ];
  }

  toggleExpandRow(row: number) {
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }
}
