//memoization = caching saves performance
//2 types of selector : input,output

import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //getting whole state and getting specific state which is cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //getting property cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
