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
import { connect } from "react-redux";

import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  selectCurrentUser,
  selectCurrentUserLoginError,
} from "../../redux/user/user-selectors";

import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import { createStructuredSelector } from "reselect"; //bcoz we gonna be pulling stufff off the state
import Baby from "assets/img/theme/Baby.png";
import Cereals from "assets/img/theme/Cereals.png";
import Drinks from "assets/img/theme/Drinks.png";
import DryFood from "assets/img/theme/DryFood.png";

import PopularCarousel from "../IndexSections/popularCarousel.jsx";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
//import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      phoneNumber: "",
      message: "",
      error: "",
      success: "",
      spinner: false,
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    //const { fetchCollectionsStart } = this.props;
    //fetchCollectionsStart();
  }

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
        message: data.get("message"), //JSON.stringify(this.props.collections), for writing collections to txt file.
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
    const {
      customerName,
      email,
      phoneNumber,
      message,
      response,
      error,
      item,
      spinner,
    } = this.state;
    const { currentUser } = this.props;

    const items = [
      {
        src: Baby,
        altText: "",
        caption: "",
        header: "",
      },
      {
        src: Cereals,
        altText: "",
        caption: "",
        header: "",
      },
      {
        src: Drinks,
        altText: "",
        caption: "",
        header: "",
      },
      {
        src: DryFood,
        altText: "",
        caption: "",
        header: "",
      },
    ];

    const { match } = this.props;
    //oonly renders withspinner if isCollectionLoaded is true
    console.log(match);

    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Shoko Online Store <span>pride in fast delivery</span>
                      </h1>
                      <p className="lead text-white">
                        Our shop has all you need at your convenience and
                        available for delivery to your desired destination in no
                        time.
                      </p>
                      <div className="btn-wrapper">
                        {/*                       <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/collection-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Shop Online</span>
                        </Button>*/}
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="/collection-page/combos"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">View Combos</span>
                        </Button>
                      </div>
                    </Col>
                    <Col className="mb-lg-auto" lg="6">
                      <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <UncontrolledCarousel items={items} />
                      </div>
                    </Col>
                  </Row>
                </div>
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
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container fluid>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Cooking Ingredients
                          </h6>
                          <Link to="/collection-page/cooking-ingredients">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Ingredients.png")}
                            />
                          </Link>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/collection-page/cooking-ingredients"
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Breakfast & Drinks
                          </h6>
                          <Link to="/collection-page/breakfast-drinks">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Cereals.png")}
                            />
                          </Link>
                          <Button
                            className="mt-4"
                            color="success"
                            href="/collection-page/breakfast-drinks"
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Dry foods
                          </h6>
                          <Link to="/collection-page/dry-foods">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/DryFood.png")}
                            />
                          </Link>

                          <Button
                            className="mt-4"
                            color="warning"
                            href="/collection-page/dry-foods"
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Health & Beauty
                          </h6>
                          <Link to="/collection-page/health&beauty">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Healthy&Beauty.png")}
                            />
                          </Link>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/collection-page/health&beauty"
                          >
                            view more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Cleaning-Detergents
                          </h6>
                          <Link to="/collection-page/cleaning-detergents">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Drinks.png")}
                            />
                          </Link>
                          <Button
                            className="mt-4"
                            color="success"
                            href="/collection-page/cleaning-detergents"
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">Baby</h6>
                          <Link to="/collection-page/baby">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Baby.png")}
                            />
                          </Link>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="/collection-page/baby"
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-lg-0  pb-lg-0 mt--500">
            <Container>
              <Row className="text-center justify-content-center">
                <div>
                  <h2 className="display-3 text-black">Popular Products</h2>
                </div>
              </Row>

              <PopularCarousel />
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>How this works</h3>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-cart" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Order your items & add to cart
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-credit-card" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Make online payment on checkout
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-delivery-fast" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Delivery to your desired destination
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">We leave you satisfied</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Partner With Us</h2>
                  <p className="lead text-white">
                    Make money when you want by partnering with a world class
                    provider that will bring convenience to yourself and the
                    customers. With 48 hour deliveries, consistent supply of
                    goods for delivery. You are guaranteed to have less downtime
                    and increased profits.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-shop text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Convinient</h5>
                  <p className="text-white mt-3">
                    Set your own schedule, you can pick up deliveries and
                    deliver to preferred areas without the hussle of looking for
                    client.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-like-2 text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Reliable</h5>
                  <p className="text-white mt-3">
                    Gurantee of continuous supply of goods for delivery to
                    multiple areas, country wide.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-money-coins text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Cost Effective</h5>
                  <p className="text-white mt-3">
                    Make money on your own terms and capacity. Competitive rates
                    afforded to all partner drivers.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-spaceship text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Fast</h5>
                  <p className="text-white mt-3">
                    Just tap and accept orders and go, pick up at JHB based
                    distribution centre and off you go to deliver.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to inquire with us?</h4>
                      <p className="mt-0">
                        Your inquiry is very important to us.
                      </p>
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
                            {currentUser ? (
                              <Input
                                placeholder="Your name"
                                type="text"
                                name="customerName"
                                onChange={this.handleChange}
                                value={currentUser.displayName}
                                onFocus={(e) =>
                                  this.setState({ nameFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ nameFocused: false })
                                }
                              />
                            ) : (
                              <Input
                                placeholder="Your name"
                                type="text"
                                name="customerName"
                                onChange={this.handleChange}
                                value={customerName}
                                onFocus={(e) =>
                                  this.setState({ nameFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ nameFocused: false })
                                }
                              />
                            )}
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
                            {currentUser ? (
                              <Input
                                placeholder="Email address"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={currentUser.email}
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            ) : (
                              <Input
                                placeholder="Email address"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                onFocus={(e) =>
                                  this.setState({ emailFocused: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailFocused: false })
                                }
                              />
                            )}
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
                              value={phoneNumber}
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
                            placeholder="Type a message..."
                            rows="4"
                            type="textarea"
                            name="message"
                            onChange={this.handleChange}
                            value={message}
                          />
                        </FormGroup>
                        {this.state.spinner ? (
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="button"
                            type="submit"
                          >
                            Loading...
                          </Button>
                        ) : response === 200 ? (
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="button"
                          >
                            Inquiry Submitted
                          </Button>
                        ) : response === 500 || response === 404 ? (
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="button"
                            type="submit"
                          >
                            Error : Re-Submit
                          </Button>
                        ) : (
                          <Button
                            block
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="button"
                            type="submit"
                          >
                            Submit Inquiry
                          </Button>
                        )}
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

/*const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectCurrentUserLoginError,
  collections: selectCollectionsForPreview,
});

export default connect(
  mapStateToProps,
  null
)(Landing);
