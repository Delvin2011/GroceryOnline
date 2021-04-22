import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//import CollectionItem from "../../components/Shop/Collection/collection-item.jsx";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { selectCartTotalWeight } from "../../redux/cart/cart-selectors";
import "react-multi-carousel/lib/styles.css";
import CartItem from "../../components/Shop/Collection/cart-item";
import { Badge } from "reactstrap";
const CheckoutCartCarousel = ({ cartItems, itemCount, total, totalWeight }) => {
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

  //const { title, items } = collections;
  //const { ...rest } = props;
  //console.log(collections);

  return (
    <>
      <div>
        <Badge
          color="primary"
          pill
          className="mr-1 lg mt-2 text-capitalize"
          style={{ fontSize: "14px" }}
        >
          Number of items : {itemCount}
        </Badge>
        <Badge
          color="primary"
          pill
          className="mr-1 lg mt-2 text-capitalize"
          style={{ fontSize: "14px" }}
        >
          Total Costs : R {total}
        </Badge>
        <Badge
          color="primary"
          pill
          className="mr-1 lg mt-2 text-capitalize"
          style={{ fontSize: "14px" }}
        >
          Total Weight : {totalWeight.toFixed(3)} kg
        </Badge>
      </div>
      <Carousel responsive={responsive}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </Carousel>
    </>
  );
};

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  totalWeight: selectCartTotalWeight,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(CheckoutCartCarousel));
