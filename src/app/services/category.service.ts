import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, throwError, shareReplay, Observable, timer, switchMap } from 'rxjs';

import { environment } from '../../environments/environment';


const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 900_000; // 15 mins
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = environment.apiUrl;
  private cache$!: Observable<Array<string>>;

  constructor(private http: HttpClient) { }

  get productCategories() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);

      this.cache$ = timer$.pipe(
        switchMap(_ => this.getProductCategories()),
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
