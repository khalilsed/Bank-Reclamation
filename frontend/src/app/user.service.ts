import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private registerUserUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";
  private logoutUrl = "http://localhost:3000/api/logout";
  private getAllUsersUrl = "http://localhost:3000/api/user";


  constructor(private http: HttpClient) { } 

  registerUser(user : User): Observable<any> {
    //var header = { headers: new HttpHeaders() }
    return this.http.post<any>(this.registerUserUrl,user);
  }

  loginUser(user : User): Observable<any> {
    //var header = { headers: new HttpHeaders() }
    return this.http.post<any>(this.loginUrl,user);
  }

  logoutUser(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.post<any>(this.logoutUrl,header);
  }
  
  getAllUsers(): Observable<any> {
    var header = { headers: new HttpHeaders() }
    return this.http.get<any>(this.getAllUsersUrl,header);
  }

}
