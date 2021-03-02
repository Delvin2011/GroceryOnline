import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../Preview/collections-preview"; //'../../Components/preview-collection/preview-collection';
import { selectCollectionsForPreview } from "../../../redux/shop/shop-selectors";
import "./collections-overview.scss";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "../../../views/IndexSections/Hero.js";
import Inputs from "../../../views/IndexSections/Inputs.js";

const CollectionsOverview = ({ collections }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  console.log(collections);
  return (
    <>
      <DemoNavbar />
      <Hero />
      <section className="section section-components">
        <Container>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </Container>
      </section>
      <CardsFooter />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
