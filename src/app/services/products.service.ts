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

  getProducts(
    { page = 1, itemsPerPage = 10, category, searchToken} :
    {page: number, itemsPerPage?: number, category?: string, searchToken?: string}
  ): Observable<ProductsPaginator> {

    const url = `${this.apiUrl}/products${category ? `/category/${category}` : ''}${searchToken ? `/search?q=${searchToken}` : ''}`;

    return this.http.get<ProductsListResponse>(url,
      {
        params: {
          limit: itemsPerPage,
          skip: itemsPerPage * (page -1),
          Select: '',
        }
      }
    ).pipe(
      map(res => ({
        products: res.products,
        page,
        searchToken,
        hasMorePages: res.skip + res.limit < res.total
      })),
      catchError(() => {
        return throwError(() => 'Something went wrong. Please try again later.')
      })
    );
  }
}
