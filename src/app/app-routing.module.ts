import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {UserOrdersComponent} from "./user-orders/user-orders.component";
import {OrderDetailsComponent} from "./user-orders/order-details/order-details.component";
import {AdminUsersComponent} from "./admin/admin-users/admin-users.component";
import {CreateproductComponent} from "./admin/createproduct/createproduct.component";
import {AdminOrderServiceService} from "./Services/admin-order-service.service";
import {AdminUsersOrdersComponent} from "./admin/admin-users/admin-users-orders/admin-users-orders.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'product', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  {path:'login', component:LoginComponent},
  {path: 'registrate', component: RegistrationComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:'my-orders', component: UserOrdersComponent},
  { path: 'my-orders/:id', component: OrderDetailsComponent },
  {path:'admin-createproduct', component: CreateproductComponent},
  {path:'admin/user-orders' ,component: AdminUsersComponent},
  {path:'admin/user-orders/:email' ,component: AdminUsersOrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
