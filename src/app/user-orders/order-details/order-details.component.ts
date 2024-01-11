import {Component, OnInit} from '@angular/core';
import {OrderDetailDto} from "../../models/order-details.model";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../Services/order.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit{
  orderDetails: OrderDetailDto | undefined;

  constructor(
      private route: ActivatedRoute,
      private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    console.log(orderId)
    if (orderId) {
      this.orderService.getOrderDetails(orderId).subscribe({
        next: (data) => {
          this.orderDetails = data;
          console.log(data);
        },
        error: (err) => {
          console.error('Error fetching order details:', err);
        }
      });
    }
  }
}
