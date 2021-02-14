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
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Primary text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-primary">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Info text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-info mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Success text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-success mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Warning text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-warning mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <small className="text-uppercase text-muted font-weight-bold">
              Danger text
            </small>
          </Col>
          <Col sm="9">
            <p className="text-danger mb-0">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers...
            </p>
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
