import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'product', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  {path:'login', component:LoginComponent},
  {path: 'registrate', component: RegistrationComponent},
  {path: 'checkout', component: CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
