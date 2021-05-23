import React, { useState, useCallback, useEffect } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";
//import Login from "../IndexSections/Login.js";
// reactstrap components
import { selectWishCartItemsCount } from "../../../redux/wish/wish-selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addWishItem, removeWishItem } from "../../../redux/wish/wish-actions";
import { selectCurrentUser } from "../../../redux/user/user-selectors";
import SignIn from "../../../views/examples/SignIn";
import SignUp from "../../../views/examples/SignUp";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Modal,
  Spinner, //,
  /* FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col*/
} from "reactstrap";

const WishCartItem = ({
  cartWishItem,
  addWishItem,
  history,
  wishItemCount,
  currentUser,
  removeWishItem,
}) => {
  const { name, price, imageUrl, quantity } = cartWishItem;
  const [timeLeft, setTimeLeft] = useState(null);
  const [modal, setModal] = useState(false);
  //const [modal, setSignInModal] = useState(false);
  //const [modal, setSignUpModal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const toggle = () => setModal(!modal);
  //const toggleSignIn = () => setSignInModal(!modal);
  //const toggleSignUp = () => setSignUpModal(!modal);

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
    <div>
      <Card
        className="card-lift--hover shadow border-0"
        style={{ backgroundColor: "transparent" }}
      >
        <CardBody className="py-3 px-3">
          <a
            onClick={() => {
              history.push("/product-page", cartWishItem);
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
          {currentUser ? (
            <div className="mt-2">
              {timeLeft == 2 ? (
                <Button color="primary">
                  <Spinner color="white" size="sm" />
                </Button>
              ) : timeLeft < 2 && timeLeft > 0 ? (
                <Button color="primary">
                  <i className="ni ni-check-bold" />
                </Button>
              ) : (
                <Button
                  color="primary"
                  onClick={() => {
                    addWishItem(cartWishItem);
                    setTimeLeft(2);
                  }}
                >
                  +
                </Button>
              )}

              {/*<Button color="primary" onClick={() => addItem(item)}>
            Add
          </Button>*/}
              <Button
                color="primary"
                onClick={() => {
                  removeWishItem(cartWishItem);
                }}
              >
                -
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  history.push("/product-page", cartWishItem);
                }}
              >
                View
              </Button>
            </div>
          ) : (
            <div className="mt-2">
              <Button color="primary" onClick={toggle}>
                +
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  history.push("/product-page", cartWishItem);
                }}
              >
                View
              </Button>
              <Modal
                className="modal-dialog-centered modal-danger"
                contentClassName="bg-gradient-danger"
                isOpen={modal}
                toggle={toggle}
              >
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-title-notification">
                    Sign In or Sign Up for :
                  </h5>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggle}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="py-3 text-left">
                    <ul>
                      <li>Customised & smart shopping.</li>
                      <li>Discount Coupons.</li>
                      <li>Safe transactions keeping.</li>
                    </ul>
                  </div>
                </div>
                <div className="modal-footer">
                  <Button
                    className="btn-white"
                    color="default"
                    type="button"
                    onClick={() => {
                      setSignIn(!signIn);
                      setModal(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="btn-white"
                    color="default"
                    type="button"
                    onClick={() => {
                      setSignUp(!signUp);
                      setModal(false);
                    }}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className="text-white ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={toggle}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </div>
          )}
        </CardBody>
      </Card>
      {signIn ? (
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={signIn}
          toggle={() => setSignIn(!signIn)}
        >
          <SignIn />
        </Modal>
      ) : signUp ? (
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={signUp}
          toggle={() => setSignUp(!signUp)}
        >
          <SignUp />
        </Modal>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishItemCount: selectWishCartItemsCount,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addWishItem: (cartWishItem) => dispatch(addWishItem(cartWishItem)),
  removeWishItem: (cartWishItem) => dispatch(removeWishItem(cartWishItem)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WishCartItem)
);

//style={{width:"100%", height:"100%"}}
