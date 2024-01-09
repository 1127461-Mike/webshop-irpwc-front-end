import { Component } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  user = {
    email: '',
    name: '',
    surname: '',
    password: '',
    postalCode: '',
    address: '',
    phoneNumber: ''
  };
  somethingWentWrong: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  onRegister(): void {
    this.authService.register(this.user)
      .subscribe(
      response => {
        console.log(response);
        this.somethingWentWrong = false;
        this.router.navigate(['/login'])
      },
      error => {
        this.somethingWentWrong = true;
      }
    );
  }
}
