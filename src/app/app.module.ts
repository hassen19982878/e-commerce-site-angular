import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { ClientComponent } from './components/private/client/client.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { ProductsListComponent } from './components/private/admin/product/products-list/products-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ClientsListComponent } from './components/private/admin/client/clients-list/clients-list.component';
import { OrdersDetailsComponent } from './components/private/admin/orders/orders-details/orders-details.component';
import { MyOrdersComponent } from './components/private/client/my-orders/my-orders.component';
import { ShoppingCartComponent } from './components/private/client/shopping-cart/shopping-cart.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    ClientComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    CategoriesListComponent,
    ProductsListComponent,
    ProductUpdateComponent,
    ProductAddComponent,
    ClientsListComponent,
    OrdersDetailsComponent,
    MyOrdersComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
