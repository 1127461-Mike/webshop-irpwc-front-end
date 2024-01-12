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
  private baseUrl = 'https://mikeasante.live';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  // getFullImagePath(relativePath: string): string {
  //   return `${this.baseUrl}${relativePath}`;
  // }
}
