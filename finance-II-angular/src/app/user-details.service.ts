import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  
  
  

  constructor(private http: HttpClient) { }

  showAll(): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/user-details";
    return this.http.get(url);
  }

  delete(userId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/user-delete?userId=" +userId;
    return this.http.delete(url);
  }

  deleteP(productId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/product-delete?productId=" +productId;
    return this.http.delete(url);
  }

  activate(userId: Number): Observable<any> {
    let url = "http://localhost:8080/finance-II/api/user-status-update?userId=" +userId;
    return this.http.get(url);
  }

  editP(product: Product) : Observable<any> {
    let url = "http://localhost:8080/finance-II/api/product-update";
    return this.http.post(url,product);
  }


  saveP(product: Product) : Observable<any> {
      let url = "http://localhost:8080/finance-II/api/save-product";
      return this.http.post(url,product);
  }


  addCard(userId : Number, cardType : String) :  Observable<any> {
    let url = "http://localhost:8080/finance-II/api/addCard?userId=" +userId+"&cardType=" + cardType;
    return this.http.get(url);
  }
}