import React, { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, removeItem } from "../../redux/cart/cart-actions";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import SignIn from "../../views/examples/SignIn";
import SignUp from "../../views/examples/SignUp";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
  Modal,
} from "reactstrap";

const Carousel = ({
  item,
  addItem,
  history,
  itemCount,
  currentUser,
  removeItem,
}) => {
  const { name, price, imageUrl, quantity, description } = item;
  const items = [
    {
      src: imageUrl,
      altText: "",
      caption: "",
      header: "",
    },
  ];

  const [timeLeft, setTimeLeft] = useState(null);
  const [modal, setModal] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const toggle = () => setModal(!modal);

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
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h3 className="text-white font-weight-light">{name}</h3>
              <p className="lead text-white mt-4">{description}</p>
              <div>
                <Badge
                  color="success"
                  pill
                  className="mr-1"
                  style={{ fontSize: "14px" }}
                >
                  Price : R {price.toFixed(2)}
                </Badge>
              </div>
              {currentUser ? (
                <div className="mt-2">
                  {timeLeft == 2 ? (
                    <Button color="primary">Loading...</Button>
                  ) : timeLeft < 2 && timeLeft > 0 ? (
                    <Button color="primary">Done...</Button>
                  ) : (
                    <Button
                      color="primary"
                      onClick={() => {
                        addItem(item);
                        setTimeLeft(2);
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}

                  {/*<Button color="primary" onClick={() => addItem(item)}>
            Add
          </Button>*/}
                  <Button color="primary" href="/cart-page">
                    Go to Cart
                  </Button>
                </div>
              ) : (
                <div className="mt-2">
                  <Button color="primary" onClick={toggle}>
                    Add to Cart
                  </Button>
                  <Button color="primary" onClick={toggle}>
                    Go to Cart
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
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <UncontrolledCarousel items={items} className="md" />
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
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
      </section>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Carousel)
);
