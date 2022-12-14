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
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { fetchCollectionsStart } from "./redux/shop/shop-actions";
import { fetchInvoicesStart } from "./redux/invoices/invoices-actions";

/*import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";*/

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import LandingPageContainer from "views/examples/LandingPageContainer.js";

//import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Product from "views/examples/Product.js";
import Checkout from "views/examples/Checkout.js";
import Checkout2 from "views/examples/Checkout2.jsx";
import WishList from "views/examples/WishList.js";
import AboutUs from "views/examples/AboutUs.js";
import TermsAndConditions from "views/examples/TermsAndConditions.js";
import TransactionSuccess from "views/Transactions/TransactionSuccess.js";
import TransactionFailed from "views/Transactions/TransactionFailed.js";
import Shop from "views/shop/shop.jsx";
import Orders from "views/order/Orders.jsx";
import MessengerCustomerChat from "react-messenger-customer-chat";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {
      checkUserSession,
      fetchCollectionsStart,
      fetchInvoicesStart,
    } = this.props;
    checkUserSession();
    fetchCollectionsStart();
    fetchInvoicesStart();
  }

  render() {
    return (
      <div>
        <MessengerCustomerChat pageId="104380961900153" appId="" size="small" />
        <Switch>
          <Route path="/" exact component={LandingPageContainer} />
          <Route
            path="/cart-page"
            exact
            render={(props) => <Checkout {...props} />}
          />
          <Route
            path="/checkout-page"
            exact
            render={(props) => <Checkout2 {...props} />}
          />
          <Route
            path="/wish-list"
            exact
            render={(props) => <WishList {...props} />}
          />
          <Route
            path="/orders"
            exact
            render={(props) => <Orders {...props} />}
          />
          <Route
            path="/terms-and-conditions"
            exact
            render={(props) => <TermsAndConditions {...props} />}
          />
          <Route path="/collection-page" component={Shop} />
          <Route path="/product-page" component={Product} />
          <Route path="/aboutUs-page" component={AboutUs} />
          <Route path="/transaction-success" component={TransactionSuccess} />
          <Route path="/transaction-failed" component={TransactionFailed} />
          <Route path="/landing-page" exact component={LandingPageContainer} />
          <Route
            path="/profile-page"
            exact
            render={(props) => <Profile {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={(props) => <Register {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchInvoicesStart: () => dispatch(fetchInvoicesStart()),
});
//App doesn't need the current user state, apart from the header component, it only sets the default state.
//Therefore passing null.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*login-page" - about us page
      <Route path="/login-page" exact render={props => <Login {...props} />} /> 
  */
