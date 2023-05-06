import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [AppComponent, CustomersComponent, OrdersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
