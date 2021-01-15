import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {ProductsComponent} from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';

const routes: Routes = [
  {path:'login' ,component: LoginComponent,canActivate: [AuthGuard]},
  { path:'register',component:RegistrationComponent,canActivate: [AuthGuard]},
  { path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  { path:'adminlogin',component:AdminloginComponent,canActivate: [AuthGuard]},
  { path:'userdetails',component:UserDetailsComponent,canActivate: [AuthGuard]},
  { path: 'product',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:"product-info",component:ProductInfoComponent,canActivate: [AuthGuard]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
