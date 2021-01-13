import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  productId : Number = Number(sessionStorage.getItem('productId'));
  product: Product;
  numbers:Number[];
  tenure : Number;
  message :String;
  p : Purchase = new Purchase();

  constructor(private productInfoService : ProductInfoService) { }

  ngOnInit(){
       this.fetchAll();
    }

  fetchAll(){
    this.productInfoService.fetchProductDetails(this.productId).subscribe(response => {
      this.product=response;
      this.fillNumber(this.product.maxTenure);
      //console.log(response.productId);
    })
  }

  buyNow(productId :Number){

    this.p.userId = Number(sessionStorage.getItem('customerId'));
    this.p.tenurePeriodOpted = this.tenure;
    this.p.productId = productId;
    this.productInfoService.buy(this.p).subscribe(response => {
      this.message = "Bought Successfully";
    });


  }

  fillNumber(p:Number){
    this.numbers = Array(p).fill(1).map((x,i)=>i+1);
  }



}

export class Purchase{
  userId : Number;
  productId : Number;
  tenurePeriodOpted : Number;
}



