// Import additional necessary services and models

import {Product} from "../models/product.model";
import {Component, OnInit} from "@angular/core";
import {ProductService} from "../Services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
    new Product('uuid-1', 'laptop', '...', 'assets/img/200w.gif', 18.00, 'Switch'),
  ];
  brands: string[]= [];
  selectedBrands: Set<string> = new Set();
  baseUrl: string = 'https://mikeasante.live';
  allProducts: Product[] = [];
  brandCounts: Map<string, number> = new Map<string, number>();

  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        const productsWithImages = data;
        this.allProducts = productsWithImages;
        this.products = productsWithImages;

        this.brands = data
          .map(product => product.brandName)
          .filter((brand): brand is string => !!brand);

        data.forEach(product => {
          if (product.brandName) {
            if (this.brandCounts.has(product.brandName)) {
              this.brandCounts.set(product.brandName, this.brandCounts.get(product.brandName)! + 1);
            } else {
              this.brandCounts.set(product.brandName, 1);
            }
          }
        });
        this.brands = Array.from(this.brandCounts.keys());
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  // getFullImagePath(relativePath: string): string {
  //   return `${this.baseUrl}${relativePath}`;
  // }
  sortProducts(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'priceAsc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (value === 'priceDesc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }

  onBrandChange(brand: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedBrands.add(brand);
    } else {
      this.selectedBrands.delete(brand);
    }
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.selectedBrands.size > 0) {
      this.products = this.allProducts.filter(product =>
        product.brandName && this.selectedBrands.has(product.brandName)
      );
    } else {
      this.products = [...this.allProducts];
    }
  }



}
