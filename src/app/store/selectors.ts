import {  createSelector } from "@ngrx/store"

import { AppState } from "./store";

import { CategoriesState } from '../models/categories.model';


const feature = (state: AppState) => state.categories;

export const categoriesSelector = createSelector(
  feature,
  (state: CategoriesState) => state.categories
);
