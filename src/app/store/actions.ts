import { createAction, props } from '@ngrx/store';


export const loadCategories = createAction('[Categories] load Categories');
export const loadCategoriesSuccess = createAction('[Categories] Load Categories Success', props<{ categories: string[] }>());
export const loadCategoriesFailure = createAction('[Categories] Load Categories Failure', props<{ error: string }>());
