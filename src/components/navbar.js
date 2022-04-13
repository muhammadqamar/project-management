import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import navLogo from "../assets/images/Logo.jpg";
import "./navbar.css";
const navbar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="nav-main">
      <img src={navLogo} className="logoImg" alt="image" />
      <Container className="nav-container">
        <Navbar.Brand href="#home" className="nav-text">
          Active Project Management
        </Navbar.Brand>
        <Nav className="nav-links" ActiveKey="#">
          <Nav.Link href="#ahvp" className="inner-nav-link">
            ahvp
          </Nav.Link>
          <Nav.Link href="#ecvp" className="inner-nav-link">
            ecvp
          </Nav.Link>
          <Nav.Link href="#fivp" className="inner-nav-link">
            fivp
          </Nav.Link>
          <Nav.Link href="#pevp" className="inner-nav-link">
            pevp
          </Nav.Link>
          <Nav.Link href="#pivp" className="inner-nav-link">
            pivp
          </Nav.Link>
          <Nav.Link href="#rdvp" className="inner-nav-link">
            rdvp
          </Nav.Link>
          <Nav.Link href="#snvp" className="inner-nav-link">
            snvp
          </Nav.Link>
          <Nav.Link href="#urpr" className="inner-nav-link">
            urpr
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navbar;
