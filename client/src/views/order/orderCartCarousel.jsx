import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOrderCartItems } from "../../redux/order/order-selectors";
import { selectOrderCartItemsCount } from "../../redux/order/order-selectors";

import "react-multi-carousel/lib/styles.css";
import OrderItem from "../../components/Shop/Collection/order-item";

import { Badge, Container } from "reactstrap";
const OrderCartCarousel = ({ orderCartItems, orderItemCount }) => {
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

  //const { paymentStatus, totalCost, deliveryStatus, recipientName, phoneNumber, address } = orderCartItems;
  //const { ...rest } = props;
  //console.log(collections);

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
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(OrderCartCarousel));
