import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerModule } from '../customer/customer.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [NavBarComponent, NotFoundComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, RouterModule, CustomerModule, HomeModule],
})
export class SharedModule {}
