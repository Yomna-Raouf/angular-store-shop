import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rates-badge',
  standalone: true,
  imports: [],
  templateUrl: './rates-badge.component.html',
  styleUrl: './rates-badge.component.css'
})
export class RatesBadgeComponent {
  @Input() productRating = 0;
}
