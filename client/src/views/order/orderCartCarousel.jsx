import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrderCartItems } from "../../redux/order/order-selectors";
import { selectOrderCartItemsCount } from "../../redux/order/order-selectors";
import { addItem } from "../../redux/cart/cart-actions";

import "react-multi-carousel/lib/styles.css";
import OrderItem from "../../components/Shop/Collection/order-item";

import { Badge, Container, Button, Spinner } from "reactstrap";
const OrderCartCarousel = ({ orderCartItems, addItem }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ReOrderItems = (items) => {
    var len = items.length;
    for (var i = 0; i < len; i++) {
      addItem(items[i]);
    }
  };

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(null);
    }
    // exit early when we reach 0
    if (!timeLeft) return;
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      console.log("TIME LEFT IS {0}", timeLeft);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <>
      <div>
        {orderCartItems.length ? (
          orderCartItems.map((orderCart) => (
            <Container>
              <div>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Payment Status : {orderCart.paymentStatus}
                </Badge>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Amount Paid : R {orderCart.totalCost}
                </Badge>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Delivery Status : {orderCart.deliveryStatus}
                </Badge>
              </div>
              <div>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Recipient Name : {orderCart.recipientName}
                </Badge>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Phone Number : {orderCart.phoneNumber}
                </Badge>
                <Badge
                  color="primary"
                  pill
                  className="mr-1 lg mt-2 text-capitalize"
                  style={{ fontSize: "14px" }}
                >
                  Address : {orderCart.address}
                </Badge>
              </div>
              <Carousel responsive={responsive}>
                {orderCart.items.length ? (
                  orderCart.items.map((orderCartItem) => (
                    <OrderItem key={orderCartItem.id} item={orderCartItem} />
                  ))
                ) : (
                  <p>Your Cart is Empty</p>
                )}
              </Carousel>
              {timeLeft >= 3 && timeLeft < 6 ? (
                <Button color="primary">
                  <Spinner color="white" size="sm" />
                </Button>
              ) : timeLeft < 3 && timeLeft > 0 ? (
                <Button color="primary">
                  <i className="ni ni-check-bold" />
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => {
                    ReOrderItems(orderCart.items);
                    setTimeLeft(5);
                  }}
                >
                  Re-Order
                </Button>
              )}
              <hr />
            </Container>
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
    </>
  );
};

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  orderCartItems: selectOrderCartItems,
  orderItemCount: selectOrderCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
//withRouter - taking the component returned with the connect as its
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderCartCarousel)
);
