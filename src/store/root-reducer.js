

import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./catagory/category.reducer";
import { cartReducer } from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories:categoriesReducer,
  cart : cartReducer,
});
