import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.scss";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { Button } from "reactstrap";
import CartItem from "../Shop/Collection/cart-item";
import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown-styles";

const CartDropdown = ({ cartItems, history, dispatch, total }) => (
  <DropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <Button
      color="primary"
      onClick={() => {
        history.push("/checkout-page");
        dispatch(toggleCartHidden());
      }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
    >
      GO TO CHECKOUT (R {total.toFixed(2)})
    </Button>
  </DropdownContainer>
);

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(CartDropdown));

//history - revisit lesson 116
