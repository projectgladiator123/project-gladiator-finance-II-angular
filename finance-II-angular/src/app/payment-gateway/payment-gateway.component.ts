import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
import { ProductInfoService } from '../product-info.service';
import { Purchase } from '../product-info/product-info.component';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  product: Product;
  tenure : Number = Number(sessionStorage.getItem('tenureOpted'));
  message :String;
  status : String;
  productId : Number = Number(sessionStorage.getItem('productId'));
  
  p : Purchase = new Purchase();
  
  constructor(private productInfoService : ProductInfoService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    this.productInfoService.fetchProductDetails(Number(sessionStorage.getItem('productId'))).subscribe(response => {
      this.product=response;
    })
  }

  buyNow(){

    this.p.userId = Number(sessionStorage.getItem('customerId'));
    this.p.tenurePeriodOpted = this.tenure;
    this.p.productId = this.productId;
    this.productInfoService.buy(this.p).subscribe(response => {
       this.message = response.message;
       this.status = response.status;      
    });


  }

}
