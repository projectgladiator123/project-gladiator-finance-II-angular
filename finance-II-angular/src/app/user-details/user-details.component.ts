import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  
  constructor() { }

  users : User[];

  ngOnInit(): void {
  }

  

}


export class User {
  userId : Number;
  name : String;
  dateOfBirth : Date;
  email : String;
  phoneNo : Number;
  username : String;
  password : String;
  address : String;
  cardType : String;
  accountNo : Number;
  ifscCode : String;
  userStatus : String;
}
