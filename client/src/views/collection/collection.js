import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/Shop/Collection/collection-item.jsx';
import {selectCollection} from '../../redux/shop/shop-selectors';



// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "../IndexSections/Hero.js";
//import Typography from "../IndexSections/Typography.js";
import Inputs from "../IndexSections/Inputs.js";
import styled from 'styled-components';
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

import './collection.scss';

const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 15px;
  }
`;
const CollectionPage = ({props, collection}) => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

  }, [])

    const {title, items} = collection;
    const { ...rest } = props;
    return (
      <>
        <DemoNavbar />
          <Hero />
          <div className="position-relative">
            <section className="section">
              <Container >
              <Row className="row-grid">
              <TitleContainer>{title.toUpperCase()}</TitleContainer>      
              <Col lg="12">
                <Row className="row-grid">
                  {items.map(item => (
                    <Col lg="4"><CollectionItem key={item.id} item={item} /></Col>
                  ))}
                  </Row>
                </Col>
                </Row>
              </Container>
            </section>
          </div>
        <CardsFooter />
      </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);