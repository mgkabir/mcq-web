import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    
    constructor(public auth:AuthService){}

    intercept(request: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
        console.log(`TokenInterceptor.intercept() : ${request.method} : ${request.url}`);
        request = request.clone({
            setHeaders:{
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        //console.log(`TokenInterceptor.intercept() : ${request.headers.get('Authorization')}`);
        return next.handle(request);
    }
}