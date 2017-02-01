import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {LoginInfo} from './login.component';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  private baseUrl:string = 'http://localhost:8080';
  constructor(private http:Http){
    }
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(loginInfo: LoginInfo): Observable<boolean> {
    return this.http
      .post(`${this.baseUrl}/login`,JSON.stringify(loginInfo), {headers: this.getContentTypeHeader()})
      .map((res:Response)=>{
        console.log(`AuthService.login() : Response JSON : ${res.json()}`);
        this.isLoggedIn = res.json();
        return res.json();
      });
  }

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

  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
