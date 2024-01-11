import {Component, OnInit} from '@angular/core';
import {OrderDetailDto} from "../../../models/order-details.model";
import {ActivatedRoute} from "@angular/router";
import {AdminOrderServiceService} from "../../../Services/admin-order-service.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit{
  orderDetail: OrderDetailDto | undefined;

  constructor(
      private route: ActivatedRoute,
      private adminOrderService: AdminOrderServiceService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('orderId');
    if (orderId) {
      this.adminOrderService.getOrderDetails(orderId).subscribe(orderDetail => {
        this.orderDetail = orderDetail;
      });
    }
  }
}
