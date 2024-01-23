import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavbarComponent } from '../../navbar/navbar.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ NavbarComponent ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnDestroy {
  private _activatedRoute = inject(ActivatedRoute);
  private _products = inject(ProductsService);

  subscription: Subscription;
  productId!: number;
  product!: Product;

  constructor() {
    this.productId = this._activatedRoute.snapshot.params['id'];

    this.subscription = this._products.getProductById(this.productId).subscribe((res) => {
      this.product = res;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
