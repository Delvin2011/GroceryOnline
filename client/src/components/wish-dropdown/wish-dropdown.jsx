import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  selectWishCartItems,
  selectWishCartTotal,
} from "../../redux/wish/wish-selectors";
import { toggleWishCartHidden } from "../../redux/wish/wish-actions";
import { Button } from "reactstrap";
import WishCartItem from "../Shop/Collection/wishCart-item";
import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./wish-dropdown-styles";

const WishCartDropdown = ({ wishCartItems, history, dispatch, total }) => (
  <DropdownContainer>
    <CartItemsContainer>
      {wishCartItems.length ? (
        wishCartItems.map((wishCartItem) => (
          <WishCartItem key={wishCartItem.id} cartWishItem={wishCartItem} />
        ))
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <Button
      color="primary"
      onClick={() => {
        history.push("/wish-list");
        dispatch(toggleWishCartHidden());
      }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
    >
      GO TO WISHLIST (R {total.toFixed(2)})
    </Button>
  </DropdownContainer>
);

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  wishCartItems: selectWishCartItems,
  total: selectWishCartTotal,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(WishCartDropdown));

//history - revisit lesson 116
