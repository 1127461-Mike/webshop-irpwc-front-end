import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../Services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;

  private baseUrl = 'http://localhost:8080';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (productData) => {
          this.product = {
            ...productData,
            imagePath: this.getFullImagePath(productData.imagePath)

          };
          console.log(this.getFullImagePath(productData.imagePath));

        },
        (error) => {
          // Handle the error
        }
      );
    }


  }

  getFullImagePath(relativePath: string): string {
    return `${this.baseUrl}${relativePath}`;
  }

}
