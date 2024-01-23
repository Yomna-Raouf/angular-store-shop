import { Routes } from '@angular/router';

export const productsRoutes: Routes = [
  { path: '',
    loadComponent: () => import('./products-home/products-home.component').then(mod => mod.ProductsHomeComponent)
  },
  {
    path: 'product/:category/:name/:id',
    loadComponent: () => import('./product-details/product-details.component').then(mod => mod.ProductDetailsComponent)
  }
];
