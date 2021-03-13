import WishActionTypes from "./wish-type";

export const toggleWishCartHidden = () => ({
  type: WishActionTypes.TOGGLE_WISHCART_HIDDEN, //we do not need the payload in this case.
});

//action that gets the item that we want to add and return new action type.
//where the action type is WishActionTypes.ADD_ITEM
export const addWishItem = (item) => ({
  type: WishActionTypes.ADD_WISHITEM,
  payload: item,
});

//gets an item as a property and set type and payload as the item we need to clear.
//create type, set type into action and create reducer that executes the type and bind to the appropriate component, e.g checkout component.
export const clearWishItemFromCart = (item) => ({
  type: WishActionTypes.CLEAR_WISHITEM_FROM_WISHCART,
  payload: item,
});

export const removeWishItem = (item) => ({
  type: WishActionTypes.REMOVE_WISHITEM,
  payload: item,
});

export const clearWishCart = () => ({
  type: WishActionTypes.CLEAR_WISHCART,
});

export const updateWishCartInFirebase = () => ({
  type: WishActionTypes.UPDATE_WISHCART_IN_FIREBASE,
});

export const setWishCartFromFirebase = (cartItems) => ({
  type: WishActionTypes.SET_WISHCART_FROM_FIREBASE,
  payload: cartItems,
});
