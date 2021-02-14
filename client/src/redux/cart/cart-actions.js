/*import CartActionTypes from './cart-type';

//action that gets the item that we want to add and return new action type.
//where the action type is CartActionTypes.ADD_ITEM
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE
  });
  
  export const setCartFromFirebase = cartItems => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
  });*/

  import CartActionTypes from './cart-type';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN //we do not need the payload in this case.
});

//action that gets the item that we want to add and return new action type.
//where the action type is CartActionTypes.ADD_ITEM
export const addItem = item => (
    {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
})

//gets an item as a property and set type and payload as the item we need to clear.
//create type, set type into action and create reducer that executes the type and bind to the appropriate component, e.g checkout component.
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})


export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE
  });
  
  export const setCartFromFirebase = cartItems => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
  });