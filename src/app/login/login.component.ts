import {Component} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedIn = true;

  constructor(private authService: AuthService,
              private router: Router) {
  }


  // onLogin(): void {
  //   this.authService.login(this.email, this.password)
  //     .subscribe(
  //       (response) => {
  //         localStorage.setItem('token', response.jwt);
  //         this.router.navigate(['/'], { queryParams: { loggedIn: 'true' } })
  //       },
  //       (error) => {
  //         console.error('Login failed', error);
  //       }
  //     );
  // }
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
