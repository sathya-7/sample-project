import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"order" ,component:OrdersComponent, 
  children:[{ path:"customerDetails", component:OrderDetailsComponent}],},
  {path:"home" , component:HomeComponent},
  {path: "product", component:ProductComponent},
  {path:"" , redirectTo:"home",pathMatch:"full" },
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
