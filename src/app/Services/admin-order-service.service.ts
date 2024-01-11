import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminOrderServiceService {

  private apiUrl = 'http://localhost:8080/api/admin/orders';

  constructor(private http: HttpClient) {}

  getUserOrders(userEmail: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })}
    return this.http.get<any[]>(`${this.apiUrl}/users/${userEmail}/orders`, httpOptions);
  }
}
