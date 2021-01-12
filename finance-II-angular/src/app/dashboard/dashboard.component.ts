import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ProductsComponent } from '../products/products.component';
import { User } from '../user-details/user-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  id:Number = Number(sessionStorage.getItem('customerId'));

  constructor(private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.fetchCard();
    this.fetchPurchase();
  }

  

  card : EMICard;

  fetchCard(){
    
    this.dashboardService.fetchCard(this.id).subscribe(response => {
      this.card = response;
    });
  }

  purchases : Purchases[];

  fetchPurchase(){
    this.dashboardService.fetchPurchase(this.id).subscribe(response => {
      this.purchases = response;
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

export class Purchases{
  id : Number;
  tenurePeriodOpted : Number;
  dateOfPurchase : Date;
  remainingAmount : Number;
  installmentsRemaining : Number;
  registration : User;
  product :Product;
  emiCard : EMICard;
}

export class Product {
  productId : Number;
  productName : String;
  vendor :String;
  productPrice : Number;
  productDetails : String;
  eligibility : String;
  quantity : Number;
  maxTenure : Number;
  productImage : String;
}
