import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, throwError } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;

  productsCategories: string[] = [];

  constructor(private http: HttpClient) { }

  async getProductCategories() {
    await this.http.get<string[]>(`${this.apiUrl}/products/categories`).pipe(
      map(res => {
        console.log({res});
        this.productsCategories = res;
        return res;
      }),
      catchError(() => {
        return throwError(() => 'Something went wrong. Please try again later.')
      })
    ).subscribe();
  }
}
