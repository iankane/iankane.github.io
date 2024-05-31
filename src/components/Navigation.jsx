import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/#/">Ian Kane Design</Navbar.Brand>
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
              <Nav.Link href="/#/picker">Pluck from Hat</Nav.Link>
              {/* <Nav.Link href="/plex">Plex</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
