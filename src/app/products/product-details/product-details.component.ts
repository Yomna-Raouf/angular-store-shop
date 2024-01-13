import { Component } from '@angular/core';

import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ NavbarComponent ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent { }
