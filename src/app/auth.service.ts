import { Injectable } from '@angular/core';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {LoginInfo} from './login.component';

@Injectable()
export class AuthService {
  private baseUrl:string = 'http://localhost:8080';
  //private baseUrl:string = 'http://ec2-52-62-233-77.ap-southeast-2.compute.amazonaws.com:8080';

  constructor(private http:Http, private router: Router){}
  
  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify({ username: username, password: password }))
          .map(res => {
            // login successful if there's a jwt token in the response
            let token = res.json() && res.json().token;
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
    /* checks for presence of Token and that Token hasn't expired.*/
    return tokenNotExpired(); 
	}
}