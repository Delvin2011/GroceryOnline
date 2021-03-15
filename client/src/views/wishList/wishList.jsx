import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state

import WishItem from "../../components/wish-item/wish-item";
import {
  selectWishCartItems,
  selectWishCartTotal,
} from "../../redux/wish/wish-selectors";

import "./wishList.scss";
//import { CheckOutContainer, HeaderTitle } from "./checkout-styles";

const WishListPage = ({ wishCartItems, total }) => (
  <section className="fluid lg">
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name & Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Add to Cart</span>
        </div>
        <div className="header-block">
          <span>Clear</span>
        </div>
      </div>
    </div>
    {wishCartItems.map((cartWishItem) => (
      <WishItem key={cartWishItem.id} cartWishItem={cartWishItem} />
    ))}

    <div className="total">
      <h4>TOTAL: R {total.toFixed(2)}</h4>
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  wishCartItems: selectWishCartItems,
  total: selectWishCartTotal,
});

export default connect(mapStateToProps)(WishListPage);
