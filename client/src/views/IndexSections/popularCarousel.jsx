import React from "react";
import Carousel from "react-multi-carousel";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../../components/Shop/Collection/collection-item.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";
import "react-multi-carousel/lib/styles.css";

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
  //console.log(collections);

  return (
    <>
      <Carousel responsive={responsive}>
        {collections
          .filter((item) => item.id === "baby")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "breakfast-cereals")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "cleaning-detergents")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "cooking-ingredients")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "dry-foods")
          .map((filterItem) => {
            return filterItem.items
              .filter((ite) => ite.popular === "1")
              .map((ite) => <CollectionItem key={ite.id} item={ite} />);
          })}

        {collections
          .filter((item) => item.id === "health&beauty")
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
