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

const CartDropdown = ({
  cartItems,
  history,
  dispatch,
  total,
  toggleCartHidden,
}) => (
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
    <div className="mt-2">
      <Button
        color="primary"
        onClick={() => {
          history.push("/cart-page");
          toggleCartHidden();
        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
      >
        <i className="ni ni-cart" />
      </Button>
      <Button
        color="primary"
        onClick={() => {
          history.push("/checkout-page");
          toggleCartHidden();
        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
      >
        CHECKOUT (R{total.toFixed(0)})
      </Button>
      <Button
        color="primary"
        onClick={() => {
          toggleCartHidden();
        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
      >
        <i className="ni ni-fat-remove" />
      </Button>
    </div>
  </DropdownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);

//history - revisit lesson 116
