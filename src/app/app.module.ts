import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BestsellersComponent } from './home/bestsellers/bestsellers.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { OrderDetailsComponent } from './user-orders/order-details/order-details.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { CreateproductComponent } from './admin/createproduct/createproduct.component';
import { AdminUsersOrdersComponent } from './admin/admin-users/admin-users-orders/admin-users-orders.component';
import { OrderDetailComponent } from './admin/admin-users/order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    BestsellersComponent,
    ProductsComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    UserOrdersComponent,
    OrderDetailsComponent,
    AdminUsersComponent,
    CreateproductComponent,
    AdminUsersOrdersComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
