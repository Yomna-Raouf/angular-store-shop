import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, throwError, shareReplay, Observable } from 'rxjs';

import { environment } from '../../environments/environment';


const CACHE_SIZE = 1;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;
  private cache$!: Observable<Array<string>>;

  constructor(private http: HttpClient) { }

  get productCategories() {
    console.log(this.cache$, 'cache')
    if (!this.cache$) {
      this.cache$ = this.getProductCategories().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private getProductCategories() {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`).pipe(
      map(res => res),
      catchError(() => {
        return throwError(() => 'Something went wrong. Please try again later.')
      })
    );
  }
}
