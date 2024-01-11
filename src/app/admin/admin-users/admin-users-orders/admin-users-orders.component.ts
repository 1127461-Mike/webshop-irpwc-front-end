import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminOrderServiceService} from "../../../Services/admin-order-service.service";
import {Order} from "../../../models/order.model";


@Component({
  selector: 'app-admin-users-orders',
  templateUrl: './admin-users-orders.component.html',
  styleUrl: './admin-users-orders.component.scss'
})
export class AdminUsersOrdersComponent implements OnInit{
  userOrders: Order[] = [];

  constructor(
      private adminOrderService: AdminOrderServiceService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    const userEmail = this.route.snapshot.paramMap.get('email');
    if (userEmail) {
      this.adminOrderService.getUserOrders(userEmail).subscribe(orders => {
        this.userOrders = orders;
      });
    }
  }

  viewOrderDetails(orderId: string): void {
    this.router.navigate(['/admin/order-details', orderId]);
  }

}
