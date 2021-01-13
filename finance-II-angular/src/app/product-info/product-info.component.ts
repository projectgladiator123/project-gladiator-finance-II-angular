import { Component, OnInit } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product;
  numbers:Number[];

  constructor(private productInfoService : ProductInfoService) { }

  ngOnInit(){
       this.fetchAll();
    }

  fetchAll(){
    this.productInfoService.fetchProductDetails().subscribe(response => {
       //alert(JSON.stringify(response));
      this.product=response;
      this.fillNumber(this.product.maxTenure);
      console.log(response.productId);
    })
  }

  fillNumber(p:Number){
    this.numbers = Array(p).fill(1).map((x,i)=>i+1);
  }
}



