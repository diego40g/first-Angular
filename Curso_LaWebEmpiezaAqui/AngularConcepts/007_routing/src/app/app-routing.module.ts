import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitlesComponent } from './titles/titles.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsBoostrapComponent } from './forms-boostrap/forms-boostrap.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: TitlesComponent
  },
  {
    path:'pipes',
    component: PipesComponent
  },
  {
    path:'form',
    component: FormsBoostrapComponent
  },{
    path:'users',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: AddUserComponent
      },{
        path: 'edit',
        component: EditUserComponent
      }
    ]
  },{
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
