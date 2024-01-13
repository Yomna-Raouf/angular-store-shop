import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { ProductsService } from '../../services/products.service';

import { ProductsPaginator } from '../../models/products.model';

import { NavbarComponent } from '../../navbar/navbar.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [
    NavbarComponent,
    InfiniteScrollModule,
    CommonModule,
    ProductCardComponent,
    CategoryComponent,
    RouterLink
  ],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {
  paginator: Observable<ProductsPaginator>;

  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  page: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(public products: ProductsService) {
    this.paginator = this.getProducts();
  }

  getProducts(searchParam?: string): Observable<ProductsPaginator> {
    return this.page.pipe(
      tap(() => this.loading.next(true)),
      switchMap((page) => this.products.getProducts({ page, searchToken: searchParam })),
      scan(this.updatePaginator, { products: [], total: 0, page: 0, hasMorePages: true, searchToken: searchParam }),
      tap(() => this.loading.next(false))
    )
  }

  searchList(token: string) {
    this.paginator = this.getProducts(token);
  }

  updatePaginator(accumulator: ProductsPaginator, value: ProductsPaginator): ProductsPaginator {
    if(value.page === 1) return value;

    accumulator.products.push(...value.products);
    accumulator.page = value.page;
    accumulator.hasMorePages = value.hasMorePages;
    accumulator.searchToken = value.searchToken;

    return accumulator;
  }

  loadMoreProducts(paginator: ProductsPaginator) {
    if (!paginator.hasMorePages) {
      return;
    }
    this.page.next(paginator.page + 1);
  }
}
