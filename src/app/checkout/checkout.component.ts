import {Component, OnInit} from '@angular/core';
import {CartItem} from "../models/cart-item.model";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
  }
  updateQuantity(item: CartItem, quantity: string): void {
    const qty = parseInt(quantity);
    if (!isNaN(qty)) {
      this.cartService.updateQuantity(item.product.id, qty);
      this.cartItems = this.cartService.getItems(); // Refresh the list
      this.calculateTotal(); // Recalculate total
    }
  }

}
