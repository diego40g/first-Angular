import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((h) => h.HomeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((c) => c.CustomerModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'logout', component: LogoutComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
