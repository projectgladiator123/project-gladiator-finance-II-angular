import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { User } from '../user-details/user-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.fetchCard();
  }

  card : EMICard;

  fetchCard(){
    this.dashboardService.fetchCard(5).subscribe(response => {
      this.card = response;
    });
  }

}

export class EMICard{
  cardNo : Number;
  validityOfCard : Date;
  cardType : String;
  balance : Number;
  registration : User;
}
