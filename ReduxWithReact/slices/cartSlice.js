//action types
const REMOVE_CART_ITEM = "remove/cartItem";
const CART_ITEM_INCREASE_QUANTITY = "increse/itemQuantity";
const ADD_CART_ITEM = "add/cartIem";
const CART_ITEM_DECREASE_QUANTITY = "decrease/itemQuantity";

//action creators
export function addCartItem(productData) {
  return {
    type: ADD_CART_ITEM,
    payload: productData,
  };
}
export function removeCartItem(productId) {
  return {
    type: REMOVE_CART_ITEM,
    payload: { productId },
  };
}
export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}
export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

// reducer function
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === existingItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case REMOVE_CART_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );

    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

    case CART_ITEM_DECREASE_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
