import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductReview, Review } from './product-review/product-review.component';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {

  constructor(private http:HttpClient) { }
  
  fetchProductReview(productId : Number): Observable<any>{
    let url = "http://localhost:8084/finance-II/api/product-review-by-productId?productId="+productId;
    return this.http.get(url);
  }

  addReview(r : Review): Observable<any>{
      let url = "http://localhost:8084/finance-II/api/add-review";
      return this.http.post(url,r);
  }
}
