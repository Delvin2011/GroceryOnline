import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

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
  CardImg,
  Row, //,
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
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={DryFood} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={Baby} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={Cereals} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={DryFood} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={Cereals} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={DryFood} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
        <Card className="card-lift--hover shadow border-0">
          <CardBody className="py-5">
            <Link to="/landing-page">
              <CardImg alt="..." src={DryFood} />
            </Link>
            <div className="mt-4">
              <Badge color="success" pill className="mr-1">
                Cooking Oil 2L
              </Badge>
              <Badge color="success" pill className="mr-1">
                R 20
              </Badge>
            </div>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              Add
            </Button>
            <Button
              className="mt-4"
              color="primary"
              href="/collection-page/backpacks"
            >
              View
            </Button>
          </CardBody>
        </Card>
      </Carousel>
    </>
  );
}
