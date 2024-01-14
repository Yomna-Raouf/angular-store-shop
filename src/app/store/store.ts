import { Action, ActionReducer } from "@ngrx/store";

import { categoriesReducer } from './reducers';
import { CategoriesState } from '../models/categories.model';
import { CategoriesEffects } from './effects';

export interface AppState {
  categories: CategoriesState;
}

export interface AppStore {
  categories: ActionReducer<CategoriesState, Action>;
}

export const appStore: AppStore = {
  categories: categoriesReducer
}

export const appEffects = [CategoriesEffects];
