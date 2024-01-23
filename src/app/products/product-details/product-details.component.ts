import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/products.model';

import { NavbarComponent } from '../../navbar/navbar.component';
import { RatesBadgeComponent } from '../rates-badge/rates-badge.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ NavbarComponent, CommonModule, NgOptimizedImage, RatesBadgeComponent, DropdownComponent ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnDestroy {
  private _activatedRoute = inject(ActivatedRoute);
  private _products = inject(ProductsService);

  loading = true;

  subscription: Subscription;
  productId!: number;
  product!: Product;

  selectedPreviewImage: string = "https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-1,h-1:w-452,h-460";

  quantityOptions = ['QTY 1', 'QTY 2'];
  selectedQuantity = 'QTY 1';

  constructor() {
    this.productId = this._activatedRoute.snapshot.params['id'];

    this.subscription = this._products.getProductById(this.productId).subscribe((res) => {
      this.product = res;
      this.selectedPreviewImage = res?.images?.[0];
      this.loading = false;
    });
  }

  updatePreviewedImage(image: string): void {
    this.selectedPreviewImage = image;
  }

  getQuantity(quantity: string) {
    this.selectedQuantity = quantity;
  }

  addToCart() {
    //TODO:
    // Create an ngrx store for the cart
    // when the user clicks on add to cart button an action should be dispatched with the selected quantity to be added to the cart
    // an API should be called to save the user cart and reducer state should be updated on success and alert the user (slert user on failure)
    // navbar menu/cart-badge should read cart items/count from the store state
    console.log('addToCart')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
