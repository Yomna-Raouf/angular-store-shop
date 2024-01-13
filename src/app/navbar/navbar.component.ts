import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  mainCategories = ['Electronics', 'Mobile', 'Men', 'Women', 'Home', 'Beauty & Health', 'Baby & Toys', 'SuperMarket', 'Sell On Platform', 'New Deals'];
}
