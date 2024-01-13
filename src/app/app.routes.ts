import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsHomeComponent } from './products/products-home/products-home.component';

export const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'home', component: ProductsHomeComponent },
  { path: 'product/:category/:name/:id',  component: ProductDetailsComponent }
];
