import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="well">
      <h4>Login Page</h4>
      <p class="text-info">{{message}}</p>
      <p>
        <button (click)="login()"  *ngIf="!authService.isLoggedIn" class="btn btn-default">Login</button>
        <button (click)="logout()" *ngIf="authService.isLoggedIn" class="btn btn-default">Logout</button>
      </p>
    </div>
    `
})

export class LoginComponent {
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'You are Logged ' + (this.authService.isLoggedIn ? 'In' : 'Out');
  }
  login() {
    this.message = 'Trying to log In ...';
    this.authService.login().subscribe(() => {
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
