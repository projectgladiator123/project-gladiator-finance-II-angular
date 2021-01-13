import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from './product-info/product-info.component';


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
  

  constructor(private http:HttpClient) { }

  fetchProductDetails(productId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/product-info?productId=" +productId;
    return this.http.get(url);
  }

  buy(purchase : Purchase) {
    let url = "http://localhost:8080/finance-II/api//transaction";
    return this.http.post(url,purchase);
  }
}
