import { createReducer, on } from '@ngrx/store';

import { CategoriesState } from '../models/categories.model';

import { loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './actions';


export const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: ''
};

export const categoriesReducer = createReducer(
  initialState,

  on(loadCategories, state => ({ ...state, loading: true })),

  on(loadCategoriesSuccess, (state, { categories }) =>({ ...state, categories, loading: false })),

  on(loadCategoriesFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
