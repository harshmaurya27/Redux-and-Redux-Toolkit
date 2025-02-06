import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer.js";
import productsReducer from "./productReducer.js";
import wishListReducer from "./wishListReducer.js";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addCartItem(1));
store.dispatch(addCartItem(2));
store.dispatch(addCartItem(3));
store.dispatch(addCartItem(4));
store.dispatch(removeCartItem(4));

store.dispatch(increaseCartItemQuantity(1));
store.dispatch(increaseCartItemQuantity(1));
store.dispatch(increaseCartItemQuantity(1));
store.dispatch(decreaseCartItemQuantity(1));

store.dispatch(addWishList(3));
store.dispatch(removeWishList(3));

console.log(store.getState());
