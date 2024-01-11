import {Component, OnInit} from '@angular/core';
import {CartItem} from "../models/cart-item.model";
import {CartService} from "../Services/cart.service";
import {OrderService} from "../Services/order.service";
import {Router} from "@angular/router";
import {OrderItemDto} from "../models/order.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
  }
  updateQuantity(item: CartItem, quantity: number): void {
    const qty = quantity;
    if (!isNaN(qty)) {
      this.cartService.updateQuantity(item.product.id, qty);
      this.cartItems = this.cartService.getItems();
      this.calculateTotal();
    }
  }

  // checkout.component.ts

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  // checkout.component.ts

  placeOrder(): void {
    if (!this.isLoggedIn()) {
      localStorage.setItem('redirectUrl', this.router.url);
      this.router.navigate(['/login']);
      return;
    }

    const orderItems: OrderItemDto[] = this.cartItems.map(item => ({
      productID: item.product.id,
      quantity: item.quantity
    }));

    this.orderService.placeOrder(orderItems).subscribe({
      next: (response) => {
        this.cartService.clearCart();
        this.router.navigate(['/']);
      },
      error: (error) => {
        // Handle errors
        console.error('Order placement failed', error);
      }
    });
  }



  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
