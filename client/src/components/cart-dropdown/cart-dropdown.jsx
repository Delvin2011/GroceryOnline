import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.scss";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { Button } from "reactstrap";
import CartItem from "../Shop/Collection/collection-item";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <Button
      color="primary"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(CartDropdown));

//history - revisit lesson 116