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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components

import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state
import { signOutStart } from "../../redux/user/user-actions";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import { toggleWishCartHidden } from "../../redux/wish/wish-actions";
import { selectWishCartItems } from "../../redux/wish/wish-selectors";
import { selectWishCartItemsCount } from "../../redux/wish/wish-selectors";
import { selectWishCartHidden } from "../../redux/wish/wish-selectors";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.jsx";
import WishCartDropdown from "../../components/wish-dropdown/wish-dropdown.jsx";

import classnames from "classnames";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
} from "reactstrap";
import SignIn from "../../views/examples/SignIn";
class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  modelState = {};
  toggleModal = (modelState) => {
    this.setState({
      [modelState]: !this.state[modelState],
    });
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  class="img-responsive"
                  src={require("assets/img/brand/argon-react-white.png")}
                  style={{ height: "60px" }}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  {/*                <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-cloud-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Download
                      </span>
                    </Button>
                  </NavItem> */}
                </Nav>
                <Nav
                  className="navbar-nav-hover align-items-lg-center  ml-lg-auto"
                  navbar
                >
                  {this.props.currentUser ? (
                    <UncontrolledDropdown nav onClick={this.props.signOutStart}>
                      <DropdownToggle nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Sign Out</span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown
                      nav
                      onClick={() => this.toggleModal("formModal")}
                    >
                      <DropdownToggle nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Sign In</span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  )}

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact Us</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => this.toggleModal("notificationModal")}
                      >
                        Phone
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        WhatsApp
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Facebook
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Orders</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  {this.props.currentUser ? (
                    <UncontrolledDropdown
                      nav
                      onClick={this.props.toggleWishCartHidden}
                    >
                      <DropdownToggle nav>
                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">
                          Wishlist ({this.props.wishItemCount})
                        </span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Wishlist</span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  )}
                  {this.props.currentUser ? (
                    <UncontrolledDropdown
                      nav
                      onClick={this.props.toggleCartHidden}
                    >
                      <DropdownToggle nav>
                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">
                          Cart ({this.props.itemCount})
                        </span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-ui-04 d-lg-none mr-1" />
                        <span className="nav-link-inner--text">Cart</span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  )}

                  {this.props.hidden ? null : <CartDropdown /> // if hidden render nothing else render cart.
                  }
                  {this.props.wishCartHidden ? null : <WishCartDropdown /> // if hidden render nothing else render cart.
                  }
                  <Modal
                    className="modal-dialog-centered"
                    size="sm"
                    isOpen={this.state.formModal}
                    toggle={() => this.toggleModal("formModal")}
                  >
                    <SignIn />
                  </Modal>
                  <Modal
                    className="modal-dialog-centered modal-danger"
                    contentClassName="bg-gradient-danger"
                    isOpen={this.state.notificationModal}
                    toggle={() => this.toggleModal("notificationModal")}
                  >
                    <div className="modal-header">
                      <h6 className="modal-title" id="modal-title-notification">
                        Your call is greatly appreciated.
                      </h6>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal("notificationModal")}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="py-3 text-center">
                        <i className="ni ni-mobile-button ni-3x" />
                        <h4 className="heading mt-4">Give us a call</h4>
                        <p>+27 7XX 8YYY</p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <Button
                        className="btn-white"
                        color="default"
                        type="button"
                        onClick={() => this.toggleModal("notificationModal")}
                      >
                        Ok, Got it
                      </Button>
                      <Button
                        className="text-white ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal("notificationModal")}
                      >
                        Close
                      </Button>
                    </div>
                  </Modal>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleCartHidden: () => dispatch(toggleCartHidden()), //function that triggers toggle
  toggleWishCartHidden: () => dispatch(toggleWishCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
  hidden: selectCartHidden, //to show or hide the cart.

  wishItemCount: selectWishCartItemsCount,
  wishCartItems: selectWishCartItems,
  wishCartHidden: selectWishCartHidden,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoNavbar);

/*                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Cart</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="/checkout-page"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-cart" />
                          </div>
                          <Media body className="ml-3">

                            {this.props.currentUser? 
                            <h6 className="heading text-primary mb-md-1">
                              Checkout ({this.props.itemCount})
                            </h6>
                            :<h6 className="heading text-primary mb-md-1">
                              Checkout
                            </h6>
                            }
                            <p className="description d-none d-md-inline-block mb-0">
                              List of items added to the cart for purchasing.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-collection" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Wishlist
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              List of items added to the wishlist cart, for purchasing at a later stage.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-delivery-fast" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Delivered
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              List of items that have been purchased and delivered to desired location.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>*/
