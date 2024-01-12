import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesBadgeComponent } from '../rates-badge/rates-badge.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RatesBadgeComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
