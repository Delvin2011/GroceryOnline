import OrderActionTypes from "./order-type";

export const toggleOrderCartHidden = () => ({
  type: OrderActionTypes.TOGGLE_ORDERCART_HIDDEN, //we do not need the payload in this case.
});

//action that gets the item that we want to add and return new action type.
//where the action type is OrderActionTypes.ADD_ITEM
export const addOrderItem = (item) => ({
  type: OrderActionTypes.ADD_ORDERITEM,
  payload: item,
});

//gets an item as a property and set type and payload as the item we need to clear.
//create type, set type into action and create reducer that executes the type and bind to the appropriate component, e.g checkout component.
export const clearOrderItemFromCart = (item) => ({
  type: OrderActionTypes.CLEAR_ORDERITEM_FROM_ORDERCART,
  payload: item,
});

export const removeOrderItem = (item) => ({
  type: OrderActionTypes.REMOVE_ORDERITEM,
  payload: item,
});

export const clearOrderCart = () => ({
  type: OrderActionTypes.CLEAR_ORDERCART,
});

export const updateOrderCartInFirebase = () => ({
  type: OrderActionTypes.UPDATE_ORDERCART_IN_FIREBASE,
});

export const setOrderCartFromFirebase = (cartItems) => ({
  type: OrderActionTypes.SET_ORDERCART_FROM_FIREBASE,
  payload: cartItems,
});
