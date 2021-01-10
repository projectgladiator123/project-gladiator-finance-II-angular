import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  
  constructor(private http: HttpClient) { }

  showAll(): Observable<any>{
    let url = "http://localhost:8080/finance-II/api/user-details";
    return this.http.get(url);
  }
}
