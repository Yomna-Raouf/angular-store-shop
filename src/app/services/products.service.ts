import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, map, throwError } from 'rxjs';

import { ProductsListResponse, ProductsPaginator } from '../models/products.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(page: number = 1, itemsPerPage: number = 10): Observable<ProductsPaginator> {
    return this.http.get<ProductsListResponse>(`${this.apiUrl}/products`,
      {
        params: {
          limit: itemsPerPage,
          skip: itemsPerPage * (page -1)
        }
      }
    ).pipe(
      map(res => ({
        products: res.products,
        page,
        hasMorePages: res.skip + res.limit < res.total
      })),
      catchError(() => {
        return throwError(() => 'Something went wrong. Please try again later.')
      })
    );
  }
}
