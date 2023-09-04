import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

export interface Column {
  flexGrow: number;
  name: string;
  resizeable?: any;
  cellTemplate?: any;
  prop: string;
  sortable?: any;
}

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.sass'],
})
export class TableViewComponent<T> {
  @Input() minTableHeight: number = 500;
  @Input() items: object[] = [];
  @Input() columns: Column[] = [];
  @Input() limit?: number;
  @Input() detailTemplate!: TemplateRef<any>;

  @ViewChild('myTable') table: any;

  toggleExpandRow(row: number) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  constructor() {}
}
