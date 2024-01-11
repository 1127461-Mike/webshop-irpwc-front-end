import { Injectable } from '@angular/core';
import {RoleService} from "./Services/role.service";
import {CanActivate, Router} from "@angular/router";
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.roleService.getRole().pipe(
        map((role: any) => {
          if (role.role !== 'ADMIN') {
            this.router.navigate(['/']);
            return false;
          }
          return true;
        })
    );
  }
}
