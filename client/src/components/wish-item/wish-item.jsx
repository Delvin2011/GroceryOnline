import React from "react";
import { connect } from "react-redux"; //used to bing
import { addItem } from "../../redux/cart/cart-actions";
import {
  clearWishItemFromCart,
  addWishItem,
  removeWishItem,
} from "../../redux/wish/wish-actions";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

import "../checkout-item/checkout-item.scss";

//we don't have access to the cartItem property, so we do an explicit return in the function and make sure to set the const of the value.
//so as to have access to the cartItem and the clearItem function

const WishItem = ({
  cartWishItem,
  clearWishItem,
  addWishItem,
  removeWishItem,
  addItem,
}) => {
  const { name, imageUrl, price, quantity } = cartWishItem;
  return (
    //disstructuring the values we are going to need
    <section className="fluid lg">
      <div className="checkout-item">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <span className="name">
          <span>{name}</span>
          <br />
          <br />
          <span>R {price.toFixed(2)}</span>
        </span>

        <span className="quantity" style={{ alignItems: "center" }}>
          <div className="arrow" onClick={() => removeWishItem(cartWishItem)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>

          <div className="arrow" onClick={() => addWishItem(cartWishItem)}>
            &#10095;
          </div>
        </span>
        <span className="quantity">
          <Button
            color="primary"
            onClick={() => {
              addItem(cartWishItem);
              clearWishItem(cartWishItem);
            }}
          >
            {" "}
            <i className="ni ni-fat-add mr-0" />
            <i className="ni ni-cart" />
          </Button>
        </span>
        <div
          className="remove-button"
          onClick={() => clearWishItem(cartWishItem)}
        >
          &#10005;
        </div>
      </div>
    </section>
  );
};
//new function that calls clearItem function as a prop and pass the cartItem
const mapDispatchToProps = (dispatch) => ({
  clearWishItem: (item) => dispatch(clearWishItemFromCart(item)),
  addWishItem: (item) => dispatch(addWishItem(item)),
  removeWishItem: (item) => dispatch(removeWishItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(WishItem);

/*      <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = 'item'/> 
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>
                <div className = 'arrow' onClick = {() => removeItem(cartItem)}>&#10094;</div>
                    <span className = 'value'>{quantity}</span>
                <div className = 'arrow' onClick = {() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className = 'price'>{price}</span>
            <div className = 'remove-button' onClick = {() =>clearItem(cartItem)}>&#10005;</div>
        </div>*/
