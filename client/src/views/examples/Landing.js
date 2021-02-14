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
import { Link } from "react-router-dom";
//import Login from "../IndexSections/Login.js";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
//import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
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
                        Shoko Online Store{" "}
                        <span>pride in fast delivery</span>
                      </h1>
                      <p className="lead text-white">
                        Our shop has all you need at your convenience and 
                        available for delivery to your desired 
                        destination in no time.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="/collection-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Shop Online</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href=""
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Delivery Routes
                          </span>
                        </Button>
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
            <Container>
              <Row className="justify-content-center" >
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">

                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Cooking Ingredients
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Ingredients.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="success" pill className="mr-1">
                              sauce
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              cooking oil
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              salt
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              etc...
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/collection-page/backpacks"                           
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Breakfast Cereals
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Cereals.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="success" pill className="mr-1">
                              Oats
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Corn Flakes
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Muesli
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              etc...
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Dry foods
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/DryFood.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="warning" pill className="mr-1">
                              Sugar
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Rice
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Pasta
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              etc...
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center mt-5">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Healthy & Beauty
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Healthy&Beauty.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="primary" pill className="mr-1">
                              soap
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              tissues
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              lotion
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              etc...
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/collection-page/balls"   
                          >
                            view more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Drinks
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Drinks.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="success" pill className="mr-1">
                              Tea
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Coffee
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              carbonated
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              etc..
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="/collection-page/boots"   
                          >
                            View more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Baby
                          </h6>
                          <Link to="/landing-page">
                            <CardImg
                              alt="..."
                              src={require("assets/img/theme/Baby.png")}
                            />
                          </Link>
                          <div className="mt-4">
                            <Badge color="warning" pill className="mr-1">
                              Cerelac
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Nan
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Pampers
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              etc...
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="/collection-page/jerseys"   
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
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
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
                            <h6 className="mb-0">Make online payment on checkout</h6>
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
                            <h6 className="mb-0">
                              We leave you satisfied
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

{}
 
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Partner With Us</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-like-2 text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Reliable</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-money-coins text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Cost Effective</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="3">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-spaceship text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Fast</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
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
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
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
                            type="text"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
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
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
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

export default Landing;

