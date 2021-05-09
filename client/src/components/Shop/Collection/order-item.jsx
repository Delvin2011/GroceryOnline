import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCurrentUser } from "../../../redux/user/user-selectors";

import { selectOrderCartItems } from "../../../redux/order/order-selectors";
import { selectOrderCartItemsCount } from "../../../redux/order/order-selectors";

import { Badge, Card, CardBody, CardImg } from "reactstrap";

const OrderItem = ({ item, history }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <div>
      <Card
        className="card-lift--hover shadow border-0"
        style={{ backgroundColor: "transparent" }}
      >
        <CardBody className="py-3 px-3">
          <a
            onClick={() => {
              history.push("/product-page", item);
            }}
            style={{ cursor: "pointer" }}
          >
            <CardImg alt="..." src={imageUrl} />
          </a>
          <div className="mt-2">
            <Badge color="success" pill className="mr-1 text-capitalize">
              {name}
            </Badge>
          </div>
          <div>
            <Badge
              color="success"
              pill
              className="mr-1 lg mt-2"
              style={{ fontSize: "14px" }}
            >
              {quantity} X
            </Badge>
            <Badge
              color="success"
              pill
              className="mr-1 lg mt-2"
              style={{ fontSize: "14px" }}
            >
              R {price.toFixed(2)}
            </Badge>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  orderCartItems: selectOrderCartItems,
  currentUser: selectCurrentUser,
  orderItemCount: selectOrderCartItemsCount,
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(OrderItem)
);
