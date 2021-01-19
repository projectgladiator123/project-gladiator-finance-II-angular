import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  constructor(private http: HttpClient) { }

  fetchCard(userId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/dashboard-card?userId=" +userId;
    return this.http.get(url);
  }

  upgrade(cardNo: Number){
    let url = "http://localhost:8080/finance-II/api/upgrade?cardNo=" +cardNo;
    return this.http.get(url);

  }

  // downgrade(userId : Number){
  //   let url = "http://localhost:8080/finance-II/api/downgrade?userId=" +userId;
  //   return this.http.get(url);
  // }

  fetchPurchase(userId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/dashboard-purchase-history?userId=" +userId;
    return this.http.get(url);
  }

  fetchInstallment(id : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/dashboard-installment-history?id=" +id;
    return this.http.get(url);
  }
  
  payInstallment(id: Number) : Observable<any>{
    let url = "http://localhost:8080/finance-II/api//installment-payment?installmentId=" +id;
    return this.http.get(url);
  }

}
