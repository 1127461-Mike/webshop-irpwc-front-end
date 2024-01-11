import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.scss'
})
export class CreateproductComponent {
  createProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    brandName: new FormControl('')
  });
  selectedFile: File | null = null;

  constructor(private productService: ProductService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.selectedFile = file;
    }
  }


  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.createProductForm.value.name || '');
    formData.append('description', this.createProductForm.value.description || '');
    formData.append('price', this.createProductForm.value.price || '');
    formData.append('brandName', this.createProductForm.value.brandName || '');

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.productService.createProduct(formData).subscribe({
      next: (response) => console.log('Product created', response),
      error: (error) => console.error('Error creating product', error)
    });
  }

}
