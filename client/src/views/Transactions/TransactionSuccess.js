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

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { clearItemFromCart } from "../../redux/cart/cart-actions";
import { selectCurrentUser } from "../../redux/user/user-selectors";

import { withRouter } from "react-router-dom";

class TransactionSuccess extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  clearCartItems = () => {
    const { cartItems } = this.props;
    var len = cartItems.length;

    for (var i = 0; i < len; i++) {
      this.props.clearItem(cartItems[i]);
    }
  };

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
                          color="success"
                          pill
                          className="mr-1"
                          style={{ fontSize: "14px" }}
                        >
                          Successful
                        </Badge>
                      </div>
                      <CardHeader className="bg-white pb-5">
                        <h4>Thank you for shopping with us!!!</h4>
                        <Button
                          color="primary"
                          href="/"
                          onClick={() => {
                            this.clearCartItems();
                          }}
                        >
                          Close
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
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

const mapStateToProps = createStructuredSelector({
  //state will be the root.reducer
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

//export default withRouter(TransactionFailed);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TransactionSuccess)
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
import Spinner from 'react-bootstrap/Spinner'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import {Heading, Container,Content,Response,Errors} from "./TransactionSuccess-styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import {withRouter} from 'react-router-dom';
import image from "assets/img/bg7.jpg";
import CustomButton from "components/CustomButtons/Button";
import Cleaner from "components/cleaner/popupCleaner";
import {selectCartItems} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user-selectors';

const useStyles = makeStyles(styles);

  const TransactionSuccess = ({ currentUser, cartItems, props, history }) => {
  const [Booking, setBooking] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);


  const classes = useStyles();
  const { ...rest } = props;

  const handleClick = () => {
      setSpinner(true);
       fetch('/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email" : cartItems[cartItems.length - 1].email,
            "customerName" : cartItems[cartItems.length - 1].customerName,
            "phoneNumber": cartItems[cartItems.length - 1].phoneNumber,
            "subject": cartItems[cartItems.length - 1].category,
            "comments": cartItems[cartItems.length - 1].comments,
            "address": cartItems[cartItems.length - 1].address,
            "natureOfServices": cartItems[cartItems.length - 1].service,
            "extraServices": cartItems[cartItems.length - 1].poolDimensions,
            "serviceIntervals": cartItems[cartItems.length - 1].frequency,
            "date": cartItems[cartItems.length - 1].serviceDate,
            "costs": "R " + cartItems[cartItems.length - 1].total,
            "payment": cartItems[cartItems.length - 1].payment
        })
          })
          //.then((response) => {response.json();console.log(response.ok)})
          .then((response) => {
            //this.setState({ response: response.status });
            setResponse(response.status)
            console.log('Success:', response.status);
            setSpinner(false);
          })
          .catch((error) => {
            //this.setState({ error: error });
            setError(error)
            console.error('Error:', error);
          });
    };
    
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
                  <CardHeader color= "success" className={classes.cardHeader} >
                    <h4>Transaction successful</h4>
                  </CardHeader>
                  <Container>
                  <Heading>Submit Booking</Heading>
                      <br/>
                      {  
                          response === 200  ? 
                          <div>
                              <Response>Booking Submitted!!!!</Response>
                              <p style = {{"textAlign" : "center"}}><CustomButton  onClick={() => {history.push('/')}} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">CLOSE</CustomButton></p> 

                          </div>
                          : response === 500 || response === 404 ?
                              <div>
                                  <Errors>Booking Not Submitted!!!!</Errors>
                                  <p style = {{"textAlign" : "center"}}><CustomButton  type = 'submit' style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">RESUBMIT</CustomButton></p> 
                              </div>
                          :   spinner? <p style = {{"textAlign" : "center"}}><CustomButton  style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">Loading...</CustomButton></p>  
                          
                          :   <p style = {{"textAlign" : "center"}}><CustomButton  onClick={handleClick} style = {{"margin-top" : "12.5px", "background": "#e91e63"}} size="sm">SUBMIT BOOKING</CustomButton></p>                                    

                      } 
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

const mapStateToProps = createStructuredSelector({ //state will be the root.reducer
  cartItems: selectCartItems,
  currentUser : selectCurrentUser
}); 

export default withRouter(connect(
  mapStateToProps,
  null
)(TransactionSuccess));*/