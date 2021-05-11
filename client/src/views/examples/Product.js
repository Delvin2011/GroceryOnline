/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useCallback, useEffect } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Carousel from "../IndexSections/productCarousel.js";
import Tabs from "../IndexSections/Tabs.js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItem } from "../../redux/cart/cart-actions";
import { selectCurrentUser } from "../../redux/user/user-selectors";
//import {signOutStart} from '../../redux/user/user-actions';
//import SignIn from "components/sign-in/sign-in";
import { withRouter } from "react-router-dom";

const Product = (props) => {
  var items = props.history.location.state; //props.location.state[0];
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  return (
    <>
      <DemoNavbar />
      <Carousel item={items} />
      <section className="section section-components">
        <Container>
          <Tabs item={items} />
        </Container>
      </section>
      <CardsFooter />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (items) => dispatch(addItem(items)),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)
);
