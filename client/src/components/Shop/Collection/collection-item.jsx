import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";
//import Login from "../IndexSections/Login.js";
// reactstrap components

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../../redux/cart/cart-actions";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg, //,
  /* FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col*/
} from "reactstrap";

const CollectionItem = ({ item, addItem, history }) => {
  const { name, price, imageUrl } = item;
  return (
    <Card className="card-lift--hover shadow border-0">
      <CardBody className="py-5">
        <Link to="/landing-page">
          <CardImg alt="..." src={imageUrl} />
        </Link>
        <div className="mt-2">
          <Badge color="success" pill className="mr-1 text-capitalize">
            {name}
          </Badge>
          <Badge color="white" pill className="mr-1"></Badge>
          <Badge color="white" pill className="mr-1"></Badge>
          <Badge color="success" pill className="mr-1">
            R {price}
          </Badge>
        </div>
        <div className="mt-2">
          <Button color="primary" onClick={() => addItem(item)}>
            Add
          </Button>
          <Button
            color="primary"
            onClick={() => {
              history.push("/product-page", item);
            }}
          >
            View
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CollectionItem)
);

//style={{width:"100%", height:"100%"}}
