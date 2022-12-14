import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state
import { withRouter } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import { Button, Row } from "reactstrap";
import "./checkout.scss";

const CheckoutPage = ({ cartItems, total, history }) => (
  <section className="fluid lg">
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Clear</span>
        </div>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <h4>TOTAL: R {total.toFixed(2)}</h4>
    </div>
    <Row className="align-items-center justify-content-center">
      <Button
        color="primary"
        onClick={() => {
          history.push("/checkout-page");
        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
      >
        <span className="btn-inner--icon mr-1">
          <i className="ni ni-user-run" />
        </span>
        <span className="btn-inner--text">Proceed to Checkout</span>
      </Button>
    </Row>
  </section>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
