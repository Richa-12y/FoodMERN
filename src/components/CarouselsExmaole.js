import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CarouselsExmaole = () => {
  const threshold = 768; // Set the screen width threshold here

  const captionStyle = {
    zIndex: "10",
    postion: "absolute",
    top: "25%",
  };

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption style={captionStyle}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Search</Button>
            </Form>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?burger"
            alt="First slide"
            style={{ filter: "brightness(30%)" }}
          />
          {window.innerWidth > threshold && (
            <Carousel.Caption>
              <h3>Experience the Ultimate Burger Delight</h3>
              <p>
                Sink your teeth into our juicy burgers and discover a world of
                taste and satisfaction. Packed with premium ingredients and
                served fresh, our burgers are the real deal!
              </p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400/?momo"
            alt="Second slide"
            style={{ filter: "brightness(30%)" }}
          />

          {window.innerWidth > threshold && (
            <Carousel.Caption>
              <h3>Treat Yourself to Our Heavenly Momos</h3>
              <p>
                Our steaming hot momos are a must-try for all foodies out there.
                Made with the freshest ingredients and bursting with flavors,
                you won't be able to resist!
              </p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400/?chicken"
            alt="Third slide"
            style={{ filter: "brightness(30%)" }}
          />

          {window.innerWidth > threshold && (
            <Carousel.Caption>
              <h3>Indulge in Our Delectable Chicken Delights</h3>
              <p>
                Succulent chicken dishes cooked to perfection, guaranteed to
                satisfy your cravings. From classic fried chicken to spicy
                chicken wings, we have it all!
              </p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselsExmaole;
