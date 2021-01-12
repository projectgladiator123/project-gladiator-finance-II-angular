import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ProductsService } from './products.service';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { ProductInfoComponent } from './product-info/product-info.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserDetailsComponent,
    ProductsComponent,
    TestComponent,
    DashboardComponent,
    AdminloginComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
