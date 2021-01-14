import { findLast } from "@angular/compiler/src/directive_resolver";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { Product } from "../dashboard/dashboard.component";
import { ProductInfoService } from "../product-info.service";
import { ProductInfoComponent } from "../product-info/product-info.component";
import { ProductsService } from "../products.service";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  productlist: Product[];
  
  constructor(private productService: ProductsService,
               private router: Router) { }
  
  ngOnInit() {
    this.showAll();
    
    // this.find();
  }
  // gotoDetails(pageName: any){
  //   this.router.navigate([`${pageName}`]);
  // }
  showAll() {
    this.productService.showAll().subscribe(response => {
      this.productlist = response;
    })
    
 
  }

  updateSessionstorage(productId: Number){
    sessionStorage.setItem('productId',String(productId));
  }
 
    // find(Product:Number){
    //   this.productService.find(4).subscribe(response =>{
    //     console.log(response[0].productId);
    //   this.productlist = response;
    //   })
    // }
    
  }

  
  
  
  
  
