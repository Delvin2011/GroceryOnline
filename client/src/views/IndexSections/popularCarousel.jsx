import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/Shop/Collection/collection-item.jsx";
import { selectCollection } from "../../redux/shop/shop-selectors";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";
import "react-multi-carousel/lib/styles.css";

import { Badge, Button, Card, CardBody, CardImg, Row, Col } from "reactstrap";
import DryFood from "assets/img/theme/DryFood.png";
import Baby from "assets/img/theme/Baby.png";
import Cereals from "assets/img/theme/Cereals.png";
import Drinks from "assets/img/theme/Drinks.png";
import CollectionPreview from "../../components/Shop/Preview/collections-preview"; //'../../Components/preview-collection/preview-collection';
const PopulaCarousel = ({ collections }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //const { title, items } = collections;
  //const { ...rest } = props;
  console.log(collections);

  return (
    <>
      <Carousel responsive={responsive}>
        {collections
          .filter((item) => item.id === "Baby")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "Breakfast-Cereals")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "Cleaning-Detergents")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "Cooking-Ingredients")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "Dry-Foods")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "Health&Beauty")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}
      </Carousel>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(PopulaCarousel);
