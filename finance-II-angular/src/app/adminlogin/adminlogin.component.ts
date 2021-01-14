import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { UserDetailsService } from '../user-details.service';

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

  ngOnInit() {
  }

  adminLoginCheck(){
    this.adminLoginService.login(this.adminlogin).subscribe(response =>{
      //alert(JSON.stringify(response));
      console.log(response.message);
       if(response.status == 'SUCESS'){
        this.router.navigate(['userdetails']);
         console.log('checking');
       }
       else
       this.message = response.message;
    })
  }

}

export class AdminLogin{
  username:string;
  password:string;
}
