import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    }, error => {
      console.error('Error fetching users', error);
    });
  }
  viewUserOrders(userEmail: string): void {
    this.router.navigate(['/admin/user-orders', userEmail]);
  }
}
