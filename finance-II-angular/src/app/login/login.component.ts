import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message:string;
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit():void {
  }

  loginCheck(){
  
    alert(JSON.stringify(this.login));
    console.log('wow');
    this.loginService.login(this.login).subscribe(response =>{
      alert(JSON.stringify(response.status));
      alert(JSON.stringify(response));
      console.log(response);
       if(response.status == 'SUCESS'){
         let customerId = response.customerId;
         let customerName = response.customerName;
         sessionStorage.setItem('customerId' ,String(customerId));
         sessionStorage.setItem('customerName',customerName);
         this.router.navigate(['dashboard']);
         console.log('checking');
       }
       else
       this.message = response.message;
    })
    
  }

}
export class Login{
  username:string;
  password:string;
}

