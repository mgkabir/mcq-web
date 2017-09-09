import { Component }   from '@angular/core';
import { Router, ActivatedRoute }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
  <div class="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <div *ngIf="errorMsg != ''" class="alert alert-danger">{{errorMsg}}</div>
      <form name="form" (ngSubmit)="f.form.valid && login()" #f="ngForm" novalidate>
          <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !username.valid }">
              <label for="username">Username</label>
              <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />
              <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>
          </div>
          <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />
              <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>
          </div>
          <div class="form-group">
              <button [disabled]="loading" class="btn btn-primary">Login</button>
              <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          </div>
          
      </form>
  </div>
    `
})

export class LoginComponent {
  model: LoginInfo = {
      username:"",
      password:""
    };
  loading = false;
  errorMsg = '';


  constructor(
      private authService: AuthService, 
      private router: Router,
      private route: ActivatedRoute ) {}

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
        .subscribe(res=>{
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            console.log("login comp returnUrl : "+returnUrl);
            this.router.navigate([returnUrl || '/']);
        },
        (err:Response)=>{
            console.log(`login comp err : ${err.status} : ${err.statusText} : ${err.url}` ); // 401
            this.errorMsg = 'Username or password is incorrect';            
            this.loading = false;
        });
        
  }

    /************ */
}

export interface LoginInfo {
  username: string;
  password: string;
}
