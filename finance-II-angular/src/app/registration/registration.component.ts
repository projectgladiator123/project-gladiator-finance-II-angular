import { User } from './../user-details/user-details.component';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user:User= new User ();
  message:string;
  constructor (private registrationService: RegistrationService ,private router:Router) { }
  
  registerUser() {
    this.registrationService.registerUser(this.user).subscribe(response => {
     console.log(JSON.stringify(response));
      if (response.status="SUCCESS"){
        this.user.cardStatus="pending";
      }
        else{
          this.message="Registration Failed";
        }
      
    })
  } 
} 
