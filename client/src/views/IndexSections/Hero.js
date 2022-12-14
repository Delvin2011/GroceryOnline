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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h1 className="display-3 text-white">
                      Shoko Online Store <span>pride in fast delivery</span>
                    </h1>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="/"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-shop" />
                        </span>
                        <span className="btn-inner--text">
                          Continue Shopping
                        </span>
                      </Button>

                      <Button
                        color="default"
                        onClick={() => {
                          this.props.history.push("/checkout-page");
                        }} //to fire the toggelCart Hidden action. Used to hinder the dropdown from showing when the cart page is open.
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-user-run" />
                        </span>
                        <span className="btn-inner--text">
                          Proceed to Checkout
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
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
        </div>
      </>
    );
  }
}

export default withRouter(Hero);

/*                    <div className="btn-wrapper mt-5">
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
</div>*/
