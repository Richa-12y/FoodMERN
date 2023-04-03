import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import Logo from "../assest/img/icons8-parachute-64.png";
import "./navbar.css";

const NavbarPage = () => {
  //   const isSmallScreen = window.innerWidth <= 576; // Set the screen width at which the Navbar should toggle
  const navigator = useNavigate();
  const gotoHome = () => {
    navigator("/");
  };
  const gotoLogin = () => {
    navigator("/login");
  };

  return (
    <>
      <Navbar className="navbar-custom" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand onClick={gotoHome}>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand onClick={gotoHome}>FeastDash</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={gotoHome}>Home</Nav.Link>
              <Nav.Link onClick={gotoLogin}>Login</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
