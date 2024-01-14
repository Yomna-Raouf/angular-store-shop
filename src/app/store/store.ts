import { Action, ActionReducer } from "@ngrx/store";

import { categoriesReducer } from './reducers';
import { CategoriesState } from '../models/categories.model';
import { CategoriesEffects } from './effects';

export interface AppState {
  categories: CategoriesState;
}

export interface AppStore {
  todo: ActionReducer<CategoriesState, Action>;
}

export const appStore: AppStore = {
  todo: categoriesReducer
}

export const appEffects = [CategoriesEffects];
