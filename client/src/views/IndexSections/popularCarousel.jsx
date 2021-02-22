import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DryFood from "assets/img/theme/DryFood.png";
import Baby from "assets/img/theme/Baby.png";
import Cereals from "assets/img/theme/Cereals.png";
import Drinks from "assets/img/theme/Drinks.png";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg, //,
  /* FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col*/
} from "reactstrap";
export default function PopulaCarousel(props) {
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
  return (
    <>
      <Carousel responsive={responsive}>
        <div>
          <CardImg alt="..." src={DryFood} />
        </div>
        <div>
          <CardImg alt="..." src={DryFood} />
        </div>
        <div>
          <CardImg alt="..." src={DryFood} />
        </div>
        <div>
          <CardImg alt="..." src={DryFood} />
        </div>
        <div>
          <div>
            <CardImg alt="..." src={Baby} />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <CardImg alt="..." src={Cereals} />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <CardImg alt="..." src={Drinks} />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <CardImg alt="..." src={Drinks} />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <CardImg alt="..." src={Drinks} />
          </div>
        </div>
        <div>
          {" "}
          <div>
            <CardImg alt="..." src={Drinks} />
          </div>
        </div>
      </Carousel>
    </>
  );
}
