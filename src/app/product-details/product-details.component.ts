import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../Services/product.service";
import {CartService} from "../Services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product | undefined;
  quantity: number = 1;
  private baseUrl = 'http://localhost:8080';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
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

        },
        (error) => {
        }
      );
    }


  }

  getFullImagePath(relativePath: string): string {
    return `${this.baseUrl}${relativePath}`;
  }


  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
    }
  }

  buyNow(): void {
    this.addToCart();
    this.router.navigate(['/checkout']);
  }

}
