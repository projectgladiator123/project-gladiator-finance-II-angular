import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchCard(userId : Number): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/dashboard?userId=" +userId;
    return this.http.get(url);
  }

}
