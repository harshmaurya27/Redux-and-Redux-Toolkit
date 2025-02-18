import { combineReducers, createStore } from "redux";
import cartReducer from "../slices/cartSlice.js";
import productsReducer from "../slices/productSlice.js";
import wishListReducer from "../slices/wishListSlice.js";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
