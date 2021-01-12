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
  
  

  constructor(private productInfoService : ProductInfoService) { }

  ngOnInit(){
       this.fetchAll();
    }

  fetchAll(){
    this.productInfoService.fetchProductDetails().subscribe(response => {
       //alert(JSON.stringify(response));
      this.product=response;
      console.log(response.productId);
    })
  }

}



