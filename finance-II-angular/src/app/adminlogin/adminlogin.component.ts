import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin:AdminLogin = new AdminLogin();
  message:string;
  constructor(private adminLoginService:AdminloginService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  adminLoginCheck(){
    alert(JSON.stringify(this.adminlogin));
  }

}

export class AdminLogin{
  username:string;
  password:string;
}
