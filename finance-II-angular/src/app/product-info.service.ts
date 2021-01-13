import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  constructor(private http:HttpClient) { }

  fetchProductDetails(): Observable<any>{
    let url = "http://localhost:8084/finance-II/api/product-info?productId=4";
    return this.http.get(url);
  }
}
