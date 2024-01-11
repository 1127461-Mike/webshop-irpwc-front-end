import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../Services/role.service";
import {of} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  role: string = '';
  constructor(private router: Router,
              private roleService: RoleService) {
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      // this.router.navigate(['/login']);

    }else {

    this.roleService.getRole()?.subscribe((data: any) => {
      this.role = data.role;
    });
    }

  }
  toMyOrder(){
    if (!this.isLoggedIn()) {
      localStorage.setItem('redirectUrl', this.router.url);
      this.router.navigate(['/login']);
      return;
    }

    this.router.navigate(['/my-orders'])
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  isAdmin(): boolean {
    return this.isLoggedIn() && this.role === 'ADMIN';
  }

}
