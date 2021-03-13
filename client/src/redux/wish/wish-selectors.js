import { createSelector } from "reselect";

//input selector is a function that gets the whole state and returns a slice of it.

const selectWishCart = (state) => state.wishCart;

export const selectWishCartItems = createSelector(
  [selectWishCart], //array of input selectors
  (cart) => cart.cartItems //outputs of the input selectors
);

export const selectWishCartHidden = createSelector(
  [selectWishCart], //array of input selectors
  (cart) => cart.hidden //outputs of the input selectors
);

export const selectWishCartItemsCount = createSelector(
  [selectWishCartItems],
  (
    cartItems //returns the total quantity of items
  ) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    ) //accumulating the quantity of each of our cart items
);

export const selectWishCartTotal = createSelector(
  [selectWishCartItems],
  (
    cartItems //returns the total quantity of items
  ) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    ) //accumulating the quantity of each of our cart items
);
/*Flow
- Passing the reducer state in to the selector and gets the cart object.
- Passed into the cart => cart.cartItems function which passes the cartItems.
- selectWishCartItemsCount, relying on the selctor, passes the cartItems function which reduces and finaly procues the item count value
- value passed as a prop into the CartIcon component.
*/
