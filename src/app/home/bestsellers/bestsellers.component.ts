import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent implements OnInit{
  products: Product[] = [
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 15.00, 'Noelle'),
  ];
  // products: Product[] = [];
  private baseUrl = 'http://localhost:8080';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data.map(product => ({
          ...product,
          imagePath: this.getFullImagePath(product.imagePath)
        }));
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  getFullImagePath(relativePath: string): string {
    return `${this.baseUrl}${relativePath}`;
  }
}
