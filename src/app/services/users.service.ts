import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  public register(user: User) { return this.http.post<any>("http://localhost:8080/users/register", user); }

  public login(user: User) { return this.http.post<any>("http://localhost:8080/users/login", user); }
  isLoggedInClient() {
    let token = localStorage.getItem("my-token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
if(decodedToken.data.role=="client")
{return true}
else {return false}
    }
    else
      return false
  }
  isLoggedIn() {
    let token = localStorage.getItem("my-token");
    if (token)
      return true
    else
      return false
  }
  isLoggedInAdmin() {
    let token = localStorage.getItem("my-token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
if(decodedToken.data.role=="admin")
{return true}
else {return false}
    }else
      return false
  }

}


