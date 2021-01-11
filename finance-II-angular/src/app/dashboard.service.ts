import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchCard(userId : Number): Observable<any>{
    let url = "http://localhost:8084/finance-II/api/dashboard-card?userId=" +userId;
    return this.http.get(url);
  }

  fetchPurchase(userId : Number): Observable<any>{
    let url = "http://localhost:8084/finance-II/api/dashboard-purchase-history?userId=" +userId;
    return this.http.get(url);
  }

}
