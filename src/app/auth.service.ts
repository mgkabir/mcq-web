import { Injectable } from '@angular/core';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {LoginInfo} from './login.component';

@Injectable()
export class AuthService {
  private baseUrl:string = 'http://localhost:8080';
  //private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';

  constructor(private http:Http, private router: Router){
      // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  
    /* this will be used to send user to the page before login.*/
    redirectUrl: string; 

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify({ username: username, password: password }))
          .map(res => {
            // login successful if there's a jwt token in the response
            let token = res.json().token;
            if(token){
                 // store username and jwt token in local storage
                 localStorage.setItem('userName', username);
                 localStorage.setItem('token', token);
                 return true;
            }
            return false;
          });
        }

  logout(): void {
      // clear token remove user from local storage to log user out
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean{
    return tokenNotExpired();
	}

  private getContentTypeHeader(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
