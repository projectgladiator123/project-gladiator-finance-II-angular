import { User } from './user-details/user-details.component';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  

  constructor(private http: HttpClient) { }

  public registerUser(user:User): Observable<any> {
    let url="http://localhost:8084/finance-II/api/registration";
    return this.http.post(url,user)
  }
}
