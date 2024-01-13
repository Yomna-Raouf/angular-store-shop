import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { ProductsService } from '../../services/products.service';

import { ProductsPaginator } from '../../models/products.model';

import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    InfiniteScrollModule,
    ProductCardComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  paginator: Observable<ProductsPaginator>;

  loading = new BehaviorSubject(true);
  page = new BehaviorSubject(1);

  constructor(public products: ProductsService) {
    this.paginator = this.getProducts();
  }

  getProducts(): Observable<ProductsPaginator> {
    return this.page.pipe(
      tap(() => this.loading.next(true)),
      switchMap((page) => this.products.getProducts(page)),
      scan(this.updatePaginator, { products: [], page: 0, hasMorePages: true }),
      tap(() => this.loading.next(false))
    )
  }

  updatePaginator(accumulator: ProductsPaginator, value: ProductsPaginator): ProductsPaginator {
    if(value.page === 1) return value;

    accumulator.products.push(...value.products);
    accumulator.page = value.page;
    accumulator.hasMorePages = value.hasMorePages;

    return accumulator;
  }

  loadMoreProducts(paginator: ProductsPaginator) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page.next(paginator.page + 1);
  }
}
