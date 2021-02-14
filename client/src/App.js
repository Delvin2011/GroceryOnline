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

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selectors';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
//import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Product from "views/examples/Product.js";
import Checkout from "views/examples/Checkout.js";
import AboutUs from "views/examples/AboutUs.js";
import Shop from 'views/shop/shop.jsx';


class App extends React.Component {

    unsubscribeFromAuth = null;
  
    componentDidMount() {
      const {checkUserSession} = this.props;
      checkUserSession();
    }

    render() {
        return (
          <div>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route path="/checkout-page" exact render={props => <Checkout {...props} />} />
      <Route path="/collection-page"  component = {Shop}/>
      <Route path="/product-page"  component = {Product}/>
      <Route path="/aboutUs-page"  component = {AboutUs}/>

      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
    </div>
    );
  }
}



const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  });
  //App doesn't need the current user state, apart from the header component, it only sets the default state.
  //Therefore passing null.
  export default connect(mapStateToProps,mapDispatchToProps)(App);

  /*login-page" - about us page
      <Route path="/login-page" exact render={props => <Login {...props} />} /> 
  */