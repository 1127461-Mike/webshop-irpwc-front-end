import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {Order} from "../models/order.model";
import {Router} from "@angular/router";
// import {Order} from "../models/order.model";

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss'
})
export class UserOrdersComponent implements OnInit{
  orders: Order[] = [];

  constructor(private orderService: OrderService,
  private router: Router) { }

  ngOnInit(): void {
    this.orderService.getMyOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });}



  viewOrderDetails(orderId: string): void {
    // Navigate to the order details component
    this.router.navigate(['/order-details', orderId]);
  }


}
