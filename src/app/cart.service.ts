import { Injectable } from '@angular/core';
import {CartItem} from "./models/cart-item.model";
import {Product} from "./models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];


  constructor() {
    this.loadCart();
  }

  loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }


  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
    this.saveCart();
  }

  removeFromCart(productId: string): void {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.saveCart();
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // cart.service.ts

  updateQuantity(productId: string, quantity: number): void {
    const item = this.items.find(item => item.product.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (item && quantity <= 0) {
      this.removeFromCart(productId);
    }
    this.saveCart();
  }


}
