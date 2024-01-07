import { Component } from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})
export class BestsellersComponent {
  products: Product[] = [
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
    new Product('uuid-1', 'Zwart power oogpotlood', '...', 'assets/img/maxbookair.jpg', 15.00, 'Noelle'),
  ];
}
