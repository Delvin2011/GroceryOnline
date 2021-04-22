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
// nodejs library that concatenates classes
import classnames from "classnames";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import CheckoutCartCarousel from "../IndexSections/checkoutCartCarousel.jsx";
// index page sections
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//import CollectionItem from "../../components/Shop/Collection/collection-item.jsx";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { selectCartTotalWeight } from "../../redux/cart/cart-selectors";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Badge,
} from "reactstrap";

class Checkout2Page extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
    destination: "",
    open: false,
    productsConfirm: false,
    customerName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  toggleDestination = (destination) => {
    this.setState({
      destination: destination,
    });
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    this.setState({
      spinner: true,
    });

    fetch("/email", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.get("email"),
        customerName: data.get("customerName"),
        phoneNumber: data.get("phoneNumber"),
        subject: "Service Inquiry",
        message: data.get("message"),
      }),
    })
      .then((response) => {
        this.setState({ response: response.status, spinner: false });
        console.log("Success:", response.status);
      })
      .catch((error) => {
        this.setState({ error: error });
        console.error("Error:", error);
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const baseCost =
      this.state.destination == "Harare"
        ? 650
        : this.state.destination == "Bulawayo"
        ? 500
        : this.state.destination == "Gweru"
        ? 550
        : 0;
    const transportCost =
      this.props.totalWeight <= 30
        ? baseCost
        : this.props.totalWeight > 30
        ? baseCost + (baseCost / 30) * (this.props.totalWeight - 30)
        : 0;

    return (
      <>
        <h3 className="h4 text-success font-weight-bold text-uppercase mb-2"></h3>
        <Row className="justify-content-center">
          <Col lg="12">
            {/* Tabs with icons */}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cart mr-2" />
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2,
                    })}
                    /*onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}*/
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-delivery-fast mr-2" />
                    Delivery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3,
                    })}
                    /*onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}*/
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-credit-card mr-2" />
                    Payment
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <CheckoutCartCarousel />
                    <Button
                      className="my-2"
                      color="primary"
                      type="button"
                      onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                    >
                      Confirm details
                    </Button>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <Dropdown isOpen={this.state.open} toggle={this.toggleOpen}>
                      <DropdownToggle caret>Destination</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => this.toggleDestination("Harare")}
                        >
                          Harare
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.toggleDestination("Bulawayo")}
                        >
                          Bulawayo
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => this.toggleDestination("Gweru")}
                        >
                          Gweru
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    {this.state.destination ? (
                      <div>
                        <div>
                          <Badge
                            color="primary"
                            pill
                            className="mr-1 lg mt-2 text-capitalize"
                            style={{ fontSize: "14px" }}
                          >
                            Number of items : {this.props.itemCount}
                          </Badge>
                          <Badge
                            color="primary"
                            pill
                            className="mr-1 lg mt-2 text-capitalize"
                            style={{ fontSize: "14px" }}
                          >
                            Total Costs : R {this.props.total}
                          </Badge>
                          <Badge
                            color="primary"
                            pill
                            className="mr-1 lg mt-2 text-capitalize"
                            style={{ fontSize: "14px" }}
                          >
                            Total Weight : {this.props.totalWeight.toFixed(3)}{" "}
                            kg
                          </Badge>
                          <Badge
                            color="primary"
                            pill
                            className="mr-1 lg mt-2 text-capitalize"
                            style={{ fontSize: "14px" }}
                          >
                            Transport Cost : {transportCost.toFixed(2)}
                          </Badge>
                        </div>
                        <Card className="bg-secondary shadow border-0">
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>
                                {" "}
                                {this.state.destination} - Recepient Details
                              </small>
                            </div>
                            <Form role="form" onSubmit={this.handleSubmit}>
                              <FormGroup
                                className={classnames("mt-5", {
                                  focused: this.state.nameFocused,
                                })}
                              >
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-user-run" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Recepient's name"
                                    type="text"
                                    name="customerName"
                                    onChange={this.handleChange}
                                    value={this.state.customerName}
                                    onFocus={(e) =>
                                      this.setState({ nameFocused: true })
                                    }
                                    onBlur={(e) =>
                                      this.setState({ nameFocused: false })
                                    }
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup
                                className={classnames({
                                  focused: this.state.emailFocused,
                                })}
                              >
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Email address"
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    onFocus={(e) =>
                                      this.setState({ emailFocused: true })
                                    }
                                    onBlur={(e) =>
                                      this.setState({ emailFocused: false })
                                    }
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup
                                className={classnames({
                                  focused: this.state.emailFocused,
                                })}
                              >
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-mobile-button" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Phone Number"
                                    type="tel"
                                    name="phoneNumber"
                                    onChange={this.handleChange}
                                    value={this.state.phoneNumber}
                                    onFocus={(e) =>
                                      this.setState({ emailFocused: true })
                                    }
                                    onBlur={(e) =>
                                      this.setState({ emailFocused: false })
                                    }
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-4">
                                <Input
                                  className="form-control-alternative"
                                  cols="80"
                                  name="name"
                                  placeholder="Address..."
                                  rows="4"
                                  type="textarea"
                                  name="message"
                                  onChange={this.handleChange}
                                  value={this.state.message}
                                />
                              </FormGroup>
                              <Button
                                className="my-2"
                                color="primary"
                                type="button"
                                onClick={(e) =>
                                  this.toggleNavs(e, "iconTabs", 3)
                                }
                              >
                                Proceed to Pay R (
                                {transportCost + this.props.total})
                              </Button>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    ) : null}
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

//this will make sure the cardDropdown component is not getting re-rendered whenever the state cchanges not related to dropdown
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  totalWeight: selectCartTotalWeight,
});
//withRouter - taking the component returned with the connect as its
export default withRouter(connect(mapStateToProps)(Checkout2Page));

/* splitsDescription = (description) => {
    var result = description.split(".");
    var list = [];
    console.log(result.length);
    for (var i = 0; i < result.length - 1; i++) {
      list.push(<li>{result[i]}.</li>);
    }
    return list;
  };

  splitproductInfo = (productInfo, size) => {
    var result = productInfo.split(";");
    var infoList = [];
    for (var i = 0; i < result.length; i++) {
      var info = result[i]; //.split("~");
      infoList.push(<li>{info.toString().replace("~", " - ")}.</li>);
    }
    infoList.push(<li>Size - {size}.</li>);
    return infoList;
  };
*/
