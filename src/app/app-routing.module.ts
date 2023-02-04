import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { AddOrderInfoComponent } from './add-order-info/add-order-info.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';


const routes: Routes = [
  {path: '', redirectTo:'/vieworderinfo',pathMatch:'full'},
  { path:'vieworderinfo', component: ViewOrderInfoComponent},
  { path:'addorderinfo', component: AddOrderInfoComponent},
  { path:'makepayment/:id',  component: MakePaymentComponent},
  { path:'viewpayments', component: ViewPaymentsComponent}
];

@NgModule({
  

  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }


