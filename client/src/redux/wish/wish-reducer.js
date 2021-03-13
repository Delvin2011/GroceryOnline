import WishActionTypes from "./wish-type";
import { addWishItemToCart, removeWishItemFromCart } from "./wish-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [], //adding or removing cart items
};

const wishCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishActionTypes.TOGGLE_WISHCART_HIDDEN: //option can be open or closed hence toggle
      return {
        ...state,
        hidden: !state.hidden,
      };
    case WishActionTypes.ADD_WISHITEM:
      console.log(action.payload);
      return {
        ...state,
        cartItems: addWishItemToCart(state.cartItems, action.payload), //add new items to the existing list
      };

    case WishActionTypes.REMOVE_WISHITEM:
      return {
        ...state,
        cartItems: removeWishItemFromCart(state.cartItems, action.payload), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case WishActionTypes.CLEAR_WISHITEM_FROM_WISHCART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ), //we are trying to keep the item with the id of the item that we don't need to clear out, and we remain with new array
      };

    case WishActionTypes.CLEAR_WISHCART:
      return {
        ...state,
        cartItems: [],
      };

    case WishActionTypes.SET_WISHCART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};

export default wishCartReducer;
