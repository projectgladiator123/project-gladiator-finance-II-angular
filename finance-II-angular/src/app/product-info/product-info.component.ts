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
  status : String;
  
  p : Purchase = new Purchase();

  constructor(private productInfoService : ProductInfoService) { }

  ngOnInit(){
       this.fetchAll();
    }

  fetchAll(){
    this.productInfoService.fetchProductDetails(this.productId).subscribe(response => {
      this.product=response;
      this.fillNumber(this.product.maxTenure);
    })
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



