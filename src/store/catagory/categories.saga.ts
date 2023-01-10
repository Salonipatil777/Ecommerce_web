import { takeLatest, all, call, put } from "typed-redux-saga";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFaild,
} from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";



export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFaild(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START , fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);


  
}
