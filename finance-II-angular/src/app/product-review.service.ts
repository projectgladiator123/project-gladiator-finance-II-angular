import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReview } from './product-review/product-review.component';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(private http:HttpClient) { }
  
  fetchProductReview(): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/product-review-by-productId?productId=4";
    return this.http.get(url);
  }

  addReview(productReview:ProductReview): Observable<any>{
      let url = "http://localhost:8080/finance-II/api/add-review";
      return this.http.post(url,productReview);
  }
}
