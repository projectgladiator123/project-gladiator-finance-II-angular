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
  message : String;

  ngOnInit(): void {
    this.showAll();
    }

  showAll(){
    this.userService.showAll().subscribe(response => {
      this.users = response;
    })
  }

  deleteUser(user : User){
    this.user= user;
      this.userService.delete(this.user.userId).subscribe(response =>{
        this.showAll();
      });
  }

  activateUser(user : User){
    this.user= user;
    this.userService.activate(this.user.userId).subscribe(respose =>{
      this.showAll();
      this.addCard(user.userId, user.cardType);
    });
  }

  addCard(userId : Number, cardType : String){
    this.userService.addCard(userId,cardType).subscribe(response =>{
      this.message = "User activated. New card generarted for user with card number "+response;
    })
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
  bankName:String;
  accountNo : Number;
  ifscCode : String;
  cardStatus:String;
  
}
