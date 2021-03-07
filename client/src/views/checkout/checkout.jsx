import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state

import CheckoutItem from "../../components/checkout-item/checkout-item";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <section className="section section-sm">
    <Container className="py-md">
      <Row className="justify-content-center">
        <Col sm="12">
          <Row className="row-grid align-items-left">
            <Col sm="4">
              <h4>Product</h4>
            </Col>
            <Col sm="3">
              <h4>Description</h4>
            </Col>
            <Col sm="2">
              <h4>Quantity</h4>
            </Col>
            <Col sm="2">
              <h4>Unit Price</h4>
            </Col>
            <Col sm="1">
              <h4>Remove</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <h4>TOTAL: R {total.toFixed(2)}</h4>
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
