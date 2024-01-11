import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order, OrderDto, OrderItemDto} from "./models/order.model";
import {Observable} from "rxjs";
import {OrderDetailDto} from "./models/order-details.model";



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:8080/api/v1/order';

  constructor(private http: HttpClient) {}

  placeOrder(orderItems: OrderItemDto[]) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    const order: OrderDto = { items: orderItems };
    return this.http.post<OrderDto>(this.orderUrl, order, httpOptions);
  }

  getMyOrders(): Observable<Order[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.get<Order[]>(`${this.orderUrl}/my`,httpOptions);
  }

  getOrderDetails(orderId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.get<OrderDetailDto>(`${this.orderUrl}/${orderId}`, httpOptions)
  }
}
