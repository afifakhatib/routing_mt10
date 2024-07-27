import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { ProductsService } from './shared/service/products.service';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserFormComponent } from './shared/components/userdashboard/user-form/user-form.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';
import { ProductsdashboardComponent } from './shared/components/productsdashboard/productsdashboard.component';
import { ProductFormComponent } from './shared/components/productsdashboard/product-form/product-form.component';
import { ProductComponent } from './shared/components/productsdashboard/product/product.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'users',
    component : UserdashboardComponent
  },
  {
    path : 'users/addUser',
    component : UserFormComponent
  },
  {
    path : 'users/:userId',
    component : UserComponent
  },
  {
    path : 'users/:userId/editUser',
    component : UserFormComponent
  },
  {
    path : 'products',
    component : ProductsdashboardComponent
  },
  {
    path : 'products/addProd',
    component : ProductFormComponent
  },
  {
    path : 'products/:pId',
    component : ProductComponent
  },
  {
    path : 'products/:pId/editProd',
    component : ProductFormComponent
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
