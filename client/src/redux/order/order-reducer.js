import OrderActionTypes from "./order-type";
import { addOrderItemToCart, removeOrderItemFromCart } from "./order-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [], //adding or removing cart items
};

const orderCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.TOGGLE_ORDERCART_HIDDEN: //option can be open or closed hence toggle
      return {
        ...state,
        hidden: !state.hidden,
      };
    case OrderActionTypes.ADD_ORDERITEM:
      console.log(action.payload);
      return {
        ...state,
        cartItems: addOrderItemToCart(state.cartItems, action.payload), //add new items to the existing list
      };

    case OrderActionTypes.REMOVE_ORDERITEM:
      return {
        ...state,
        cartItems: removeOrderItemFromCart(state.cartItems, action.payload), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case OrderActionTypes.CLEAR_ORDERITEM_FROM_ORDERCART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case OrderActionTypes.CLEAR_ORDERCART:
      return {
        ...state,
        cartItems: [],
      };

    case OrderActionTypes.SET_ORDERCART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default orderCartReducer;
