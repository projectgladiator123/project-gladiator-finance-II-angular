import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  activate(userId: Number): Observable<any> {
    let url = "http://localhost:8080/finance-II/api/user-status-update?userId=" +userId;
    return this.http.get(url);
  }
}