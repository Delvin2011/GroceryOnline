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
        <main ref="main"></main>
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
