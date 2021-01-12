import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { Product } from "../dashboard/dashboard.component";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productlist: Product[];
  



  constructor(private productService: ProductsService,
               private router: Router) { }
  
  ngOnInit() {
    this.showAll();
  }
  gotoDetails(pageName: any){
    this.router.navigate([`${pageName}`]);
  }
  showAll() {
    this.productService.showAll().subscribe(response => {
      
     // alert(JSON.stringify(response));
      console.log(response[0].productName);
      this.productlist = response;
    })
    
  }

  
  }
  
  
  
