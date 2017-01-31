import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="well container">
      <h4>Login Page</h4>
      <p class="text-info">{{message}}</p>
      <form #f="ngForm">
        <div class="row">
          <div class="form-group">
              <label for="userName">User Name {{loginInfo.userName}}</label>
              <input type="text" [(ngModel)]="loginInfo.userName" name="userName" id="userName" class="form-control" placeholder="User Name" required>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
              <label for="password">Password {{loginInfo.password}}</label>
              <input type="password" [(ngModel)]="loginInfo.password" name="password" id="password" class="form-control" placeholder="Password" required>
          </div>
        </div>
        <div class="row">
          <button (click)="login()"  *ngIf="!authService.isLoggedIn" class="btn btn-default">Login</button>
          <button (click)="logout()" *ngIf="authService.isLoggedIn" class="btn btn-default">Logout</button>

        </div>
      </form>
    </div>
    `
})

export class LoginComponent {
  message: string;
  loginInfo: LoginInfo = {
    userName:"",
    password:""
  };

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'You are Logged ' + (this.authService.isLoggedIn ? 'In' : 'Out');
  }

  login() {
    this.message = 'Trying to log In ...';
    this.authService.login(this.loginInfo).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

export class LoginInfo {
  userName: string;
  password: string;
}
