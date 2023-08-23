import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/auth.guard';

const homeRoutes: Routes = [
  {
    path: 'home',
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
