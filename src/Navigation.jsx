import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Ian Kane Design</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://blog.iankanedesign.com/">Blog</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/ian-kane-software-developer/">
                LinkedIn
              </Nav.Link>
              <Nav.Link href="https://demos.accusoft.com/virtualviewer/">
                VirtualViewer Demo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
