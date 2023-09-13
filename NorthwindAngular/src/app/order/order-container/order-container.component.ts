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
  public detailColumns: Column[] = [];
  isVisible = false;
  pageSizeOptions: number[] = [10, 20, 0];
  pageSize = 10;
  pageIndex = 0;

  @ViewChild('tableView') tableView!: TableViewComponent<any>;
  @ViewChild('orderIdCellTemplate')
  private orderIdCellTemplate!: TemplateRef<any>;
  @ViewChild('orderNumberCellTemplate')
  private orderNumberCellTemplate!: TemplateRef<any>;

  constructor(
    private ref: ChangeDetectorRef,
    private service: OrderContainerService
  ) {}

  ngOnInit() {
    this.getOrders(1, 10);
  }

  changePage(event: any): void {
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }

  ngAfterViewInit(): void {
    this.columns = this.getColumns();
    this.detailColumns = this.getDetailsColumns();
    this.ref.detectChanges();
  }

  getOrders(page: number, rows: number): void {
    this.isVisible = true;
    this.service.getOrderList(page, rows).subscribe((response) => {
      this.items = response;
      this.numberOfRecords = response[0].totalRecords;
      this.isVisible = false;
    });
  }

  private getColumns(): Column[] {
    return [
      {
        name: 'Id',
        flexGrow: 0.5,
        prop: '',
        cellTemplate: this.orderIdCellTemplate,
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

  private getDetailsColumns(): Column[] {
    return [
      {
        name: 'Product',
        prop: 'product',
        flexGrow: 0.5,
        cellTemplate: 'productName',
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
