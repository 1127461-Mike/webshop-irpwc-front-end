import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'https://mikeasante.live/api/v1/user';

  constructor(private http: HttpClient) {
  }

  getRole() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    return this.http.get<string>(`${this.apiUrl}/getrole`, httpOptions);
  }
}
