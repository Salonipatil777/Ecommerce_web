import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { categoryMap } from "./category.types";
import { RootState } from "../Store";

const selectCategoriesReducer = (state:RootState):CategoriesState => state.categories;
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories):categoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as categoryMap)
);


export const selectIsCategoriesLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)