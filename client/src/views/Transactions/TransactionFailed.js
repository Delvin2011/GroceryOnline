import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectOrderCartItems } from "../../redux/order/order-selectors";
import { clearOrderItemFromCart } from "../../redux/order/order-actions";
import { selectCurrentUser } from "../../redux/user/user-selectors";

import { withRouter } from "react-router-dom";

class TransactionFailed extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-12">
              <Row className="justify-content-center">
                <Col lg="10">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <h4>Transaction Status</h4>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-3 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <Badge
                          color="danger"
                          pill
                          className="mr-1"
                          style={{ fontSize: "14px" }}
                        >
                          Failed
                        </Badge>
                      </div>
                      <CardHeader className="bg-white pb-5">
                        <h4>Go to checkout?</h4>
                        <Button
                          color="primary"
                          href="/checkout2-page"
                          onClick={() => {
                            this.props.clearOrderItem(
                              this.props.orderCartItems[
                                this.props.orderCartItems.length - 1
                              ]
                            );
                          }}
                        >
                          Checkout
                        </Button>
                        <h4>Return to home page.</h4>
                        <Button
                          color="primary"
                          href="/"
                          onClick={() => {
                            this.props.clearOrderItem(
                              this.props.orderCartItems[
                                this.props.orderCartItems.length - 1
                              ]
                            );
                          }}
                        >
                          Home
                        </Button>
                      </CardHeader>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearOrderItem: (item) => dispatch(clearOrderItemFromCart(item)),
});

const mapStateToProps = createStructuredSelector({
  //state will be the root.reducer
  orderCartItems: selectOrderCartItems,
  currentUser: selectCurrentUser,
});

//export default withRouter(TransactionFailed);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionFailed)
);

/*import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {Heading, Container,Content} from "./TransactionFailed-styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import {withRouter} from 'react-router-dom';
import image from "assets/img/bg7.jpg";
import CustomButton from "components/CustomButtons/Button";
import Cleaner from "components/cleaner/popupCleaner";

import {selectCartItems} from '../../redux/cart/cart-selectors';
import { clearItemFromCart } from '../../redux/cart/cart-actions';
import {selectCurrentUser} from '../../redux/user/user-selectors';

const useStyles = makeStyles(styles);

  const TransactionFailed = ({ currentUser, cartItems, clearItem, props, history }) => {
  const [Booking, setBooking] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const { ...rest } = props;
  console.log(cartItems.length);
  console.log(cartItems[cartItems.length - 1]);
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="StarHome Cleaners"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{width:"100%"}}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader} >
                    <h4>Transaction has been cancelled</h4>

                  </CardHeader>
                  <Container>
                  <Heading>Please try again?</Heading>
                      <br/>
                      <p style = {{"textAlign" : "center"}}><CustomButton  onClick = {() => {setBooking(!Booking); clearItem(cartItems[cartItems.length - 1])}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Book Service</CustomButton></p> 
                      <br/>
                  <Heading>Proceed to Home Page?</Heading>
                      <br/>
                      <p style = {{"textAlign" : "center"}}><CustomButton onClick={() => { history.push('/'); clearItem(cartItems[cartItems.length - 1])}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Home</CustomButton></p> 
                      <br/>
                  </Container>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>

      {Booking ?
          <Cleaner showPopup= {Booking} closePopup ={() => setBooking(!Booking)} currentUser = {currentUser}/>          
          : null
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

const mapStateToProps = createStructuredSelector({ //state will be the root.reducer
  cartItems: selectCartItems,
  currentUser : selectCurrentUser
}); 

//export default withRouter(TransactionFailed);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionFailed));*/
