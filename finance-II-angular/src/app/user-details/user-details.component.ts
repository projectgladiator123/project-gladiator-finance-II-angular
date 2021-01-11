import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService : UserDetailsService) { }

  users : User[];
  user : User;


  ngOnInit(): void {
    this.showAll();
    }

  showAll(){
    this.userService.showAll().subscribe(response => {
      
      //alert(JSON.stringify(response));
      this.users = response;
    })
  }

  deleteUser(user : User){
    this.user= user;
      console.log("delete : "+this.user.userId);
      this.userService.delete(this.user.userId).subscribe();
  }

  activateUser(user : User){
    this.user= user;
    console.log("activate : "+this.user.userId);
      this.userService.activate(this.user.userId).subscribe();
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
