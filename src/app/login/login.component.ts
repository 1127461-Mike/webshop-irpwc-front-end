import {Component, ViewChild} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedIn = true;
  @ViewChild('loginForm') loginForm!: NgForm;
  constructor(private authService: AuthService,
              private router: Router) {
  }



  onLogin(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.jwt);
          this.router.navigateByUrl(this.getRedirectUrl());
        },
        (error) => {
          console.error('Login failed', error);
        }
      );
  }

  getRedirectUrl(): string {
    const redirectUrl = localStorage.getItem('redirectUrl') || '/';
    localStorage.removeItem('redirectUrl');
    return redirectUrl;
  }

}
