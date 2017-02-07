import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
  <div class="col-md-6 col-md-offset-3">
      <h2>Login</h2>
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
          <div *ngIf="error" class="alert alert-danger">{{error}}</div>
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
  error = '';


  constructor(public authService: AuthService, public router: Router) {
  }


  login() {
      this.loading = true;
      this.authService.login(this.model.username, this.model.password)
          .subscribe(result => {
            console.log(`LoginComponent.login() : result : ${result}`);
              if (result) {
                  this.router.navigate(['/']);
              } else {
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
              }
          });
  }
/*
  login() {
    this.message = 'Trying to log In ...';
    this.authService.login(this.loginInfo.userName,this.loginInfo.password)
      .subscribe((r) => {
          this.setMessage();
          console.log(`logIn called : ${r}`);
          if (this.authService.isLoggedIn) {
              // Get the redirect URL from our auth service. If no redirect has been set, use the default
              let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
              // Redirect the user
              this.router.navigate([redirect]);
            }
          });
      }
      */
/*
  logout() {
      this.authService.logout().subscribe((r)=>{
      console.log(`logOut called : ${r}`);
      this.setMessage();
      this.router.navigate(['home']);
    });
  }
  */
}

export class LoginInfo {
  username: string;
  password: string;
}
