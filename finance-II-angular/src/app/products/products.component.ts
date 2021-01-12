import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList: ProductsComponent[];
  loading = false;
  brands = ["All", "Apple", "Realme", "Nokia", "Motorolla"];

  selectedBrand: "All";

  page = 1;
  constructor(
    
    private productService: ProductsService,
 
  ) {
  
  }
  products : Products[];
  product : Products;
  ngOnInit() {
    this.showAll();
  }
  showAll() {
    this.productService.showAll().subscribe(response => {
      
      //alert(JSON.stringify(response));
      this.productList = response;
    })
    throw new Error("Method not implemented.");
  }

  
  }
  export class Products {
  
  
    name : String;
    
    price : Number;
    vendor : String;
    
  }
  
  
