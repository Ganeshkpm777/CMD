import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrderInfoComponent } from './add-order-info/add-order-info.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { FieryService } from './service/fiery.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewPaymentsComponent } from './view-payments/view-payments.component';



@NgModule({
  declarations: [
    AppComponent,
    AddOrderInfoComponent,
    MakePaymentComponent,
    ViewOrderInfoComponent,
    ViewPaymentsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FieryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
