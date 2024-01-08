// Import additional necessary services and models

import {Product} from "../models/product.model";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 15.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 15.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 15.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 15.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/maxbookair.jpg', 15.00, 'Switch'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sortProducts(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'priceAsc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (value === 'priceDesc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }
}
