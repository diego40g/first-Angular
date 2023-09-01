import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableViewComponent } from './table-view/table-view.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent, TableViewComponent],
  exports: [NavBarComponent, NotFoundComponent, TableViewComponent],
  imports: [CommonModule, RouterModule, NgxDatatableModule],
})
export class SharedModule {}
