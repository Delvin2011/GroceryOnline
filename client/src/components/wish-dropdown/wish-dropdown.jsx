import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import {
  selectWishCartItems,
  selectWishCartTotal,
} from "../../redux/wish/wish-selectors";
import { toggleWishCartHidden } from "../../redux/wish/wish-actions";
import { selectWishCartHidden } from "../../redux/wish/wish-selectors";

import { Button } from "reactstrap";
import WishCartItem from "../Shop/Collection/wishCart-item";
import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./wish-dropdown-styles";

const WishCartDropdown = ({
  wishCartItems,
  history,
  dispatch,
  total,
  toggleWishCartHidden,
}) => (
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
    <div>
      <Button
        color="primary"
        text-capitalize
        onClick={() => {
          history.push("/wish-list");
          dispatch(toggleWishCartHidden());
        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
      >
        WISHLIST (R {total.toFixed(2)})
      </Button>
      <Button
        color="primary"
        textTransform="none"
        onClick={() => {
          toggleWishCartHidden();
        }}
      >
        <i className="ni ni-fat-remove" />
      </Button>
    </div>
  </DropdownContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleWishCartHidden: () => dispatch(toggleWishCartHidden()),
});
//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  wishCartItems: selectWishCartItems,
  wishCartHidden: selectWishCartHidden,
  total: selectWishCartTotal,
});

//withRouter - taking the component returned with the connect as its
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WishCartDropdown)
);

//history - revisit lesson 116
