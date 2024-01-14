import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoryService } from '../services/category.service';
import { loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './actions';

@Injectable()
export class CategoriesEffects {

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.CategoryService.productCategories.pipe(
          map((categories) => {
            console.log({ categories })
            return loadCategoriesSuccess({ categories })
          }),
          catchError((error) =>
            of(loadCategoriesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private CategoryService: CategoryService) {}
}
