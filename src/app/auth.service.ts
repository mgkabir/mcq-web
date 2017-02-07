import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {LoginInfo} from './login.component';

@Injectable()
export class AuthService {
  public token: string;
  isLoggedIn: boolean = false;
  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http){
      // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string): Observable<boolean> {
    console.log(`AuthService.login() : user , pass = ${username}, ${password}`);
      return this.http.post(`${this.baseUrl}/login`, JSON.stringify({ username: username, password: password }))
          .map((response: Response) => {
              console.log(`AuthService.login() : response ${response.json()}`);
              // login successful if there's a jwt token in the response
              let token = response.json().token;

              console.log(`AuthService.login() : token = ${token}`);
              if (token) {
                  // set token property
                  this.token = token;

                  // store username and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                  // return true to indicate successful login
                  return true;
              } else {
                  // return false to indicate failed login
                  return false;
              }
          });
  }
/*
  login(loginInfo: LoginInfo): Observable<boolean> {
    return this.http
      .post(`${this.baseUrl}/login`,JSON.stringify(loginInfo), {headers: this.getContentTypeHeader()})
      .map((res:Response)=>{
        console.log(`AuthService.login() : Response JSON : ${res.json()}`);
        this.isLoggedIn = res.json();
        return res.json();
      });
  }
*/
logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
}
/*
  logout(): Observable<boolean> {
    return this.http
      .post(`${this.baseUrl}/logout`,JSON.stringify("loginInfo"),{headers: this.getContentTypeHeader()})
      .map((res:Response)=>{
          console.log(`AuthService.logout() : Response JSON : ${res.json()}`);
          this.isLoggedIn = res.json();
          console.log(`AuthService.logout() : isLoggedIn : ${this.isLoggedIn}`);
          return res.json();
      });
}
*/
  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
