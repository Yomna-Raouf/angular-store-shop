import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  // TODO:
  // Get User Select Categories from top nav (EventEmitter or state)
  // Get Selected Category sub-Categories(from categories service) and return in to the view
  electronicsCategorySubCategories = [
    "Computers & Accessories",
    "Video Games",
    "Mobiles & Accessories",
    "Portable Audio & Video",
    "Wearables",
    "Camera & Photo",
    "Television & Video"
  ];
}
