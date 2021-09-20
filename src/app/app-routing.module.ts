import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { ClientGuard } from './client.guard';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ClientsListComponent } from './components/private/admin/client/clients-list/clients-list.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { ShoppingCartComponent } from './components/private/client/shopping-cart/shopping-cart.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'dashboard',component:DashboardComponent,
canActivate:[AuthGuard]},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'categories-list',component:CategoriesListComponent,
canActivate:[AdminGuard]
},
{path:'add-category',component:CategoryAddComponent,
canActivate:[AdminGuard]},
{path:'category-update/:id',component:CategoryUpdateComponent,
canActivate:[AdminGuard]},
{path:'products-list',component:ProductsListComponent,
canActivate:[AdminGuard]},
{path:'product-update/:id',component:ProductUpdateComponent,
canActivate:[AdminGuard]},
{path:'add-product',component:ProductAddComponent,
canActivate:[AdminGuard]},
{path:'clients-list',component:ClientsListComponent,
canActivate:[AdminGuard]},
{path:'orders',component:OrdersDetailsComponent,
canActivate:[AdminGuard]},
{path:'my-orders',component:MyOrdersComponent,
canActivate:[ClientGuard]},
{path:'shopping-cart',component:ShoppingCartComponent,
canActivate:[ClientGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
