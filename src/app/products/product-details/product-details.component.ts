import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/products.model';

import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ NavbarComponent, CommonModule ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnDestroy {
  private _activatedRoute = inject(ActivatedRoute);
  private _products = inject(ProductsService);

  subscription: Subscription;
  productId!: number;
  product!: Product;

  selectedPreviewImage!: string;

  constructor() {
    this.productId = this._activatedRoute.snapshot.params['id'];

    this.subscription = this._products.getProductById(this.productId).subscribe((res) => {
      this.product = res;
      this.selectedPreviewImage = res?.images?.[0];
      console.log({res})
    });
  }

  updatePreviewedImage(image: string): void {
    this.selectedPreviewImage = image;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
