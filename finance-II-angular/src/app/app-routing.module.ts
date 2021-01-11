import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'register',component:RegistrationComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'adminlogin',component:AdminloginComponent},
  { path:'userdetails',component:UserDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
