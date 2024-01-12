import { Component } from '@angular/core';

import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  mainCategories = ['Electronics', 'Mobile', 'Men', 'Women', 'Home', 'Beauty & Health', 'Baby & Toys', 'SuperMarket', 'Sell On Platform', 'New Deals'];
}
