import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.scss'
})
export class CreateAdminComponent {
  newAdmin = {
    email: '',
    name: '',
    surname: '',
    password: '',
    postalCode: '',
    address: '',
    phoneNumber: ''

  };

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.registerAdmin(this.newAdmin).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error('Error creating admin:', error);
      }
    });
  }

}
