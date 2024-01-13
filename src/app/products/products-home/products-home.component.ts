import { Component } from '@angular/core';

import { ProductsListComponent } from '../products-list/products-list.component';


@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {

}
