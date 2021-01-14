import { findLast } from "@angular/compiler/src/directive_resolver";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { Product } from "../dashboard/dashboard.component";
import { ProductInfoService } from "../product-info.service";
import { ProductsService } from "../products.service";


@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  productlist:   Product[];
//   filteredProducts: Product[];
//  private _searchTerm:    string;
//  get searchTerm():string{
//    return this._searchTerm;
//  }
//  set searchTerm(value:string){
//    this._searchTerm = value;
//    this.filteredProducts=this.filterProducts(value);
//  }
// filterProducts(searchString : string){
//   return this.productlist.filter(Product=>Product.productName.toLowerCase().indexOf(searchString.toLowerCase())! == -1);

// }
  



  constructor(private productService: ProductsService,
               private router: Router) { }
  
  ngOnInit() {
    this.showAll();
    // this.filteredProducts=this.productlist();
    // this.find();
  }
  
  showAll() {
    this.productService.showAll().subscribe(response => {
      
    //  alert(JSON.stringify(response));
      console.log(response[0].productName);
      this.productlist = response;
    })
    
 
  }
 
    // find(Product:Number){
    //   this.productService.find(4).subscribe(response =>{
    //     console.log(response[0].productId);
    //   this.productlist = response;
    //   })
    // }
    
  }
  

  
  
  
  
  
