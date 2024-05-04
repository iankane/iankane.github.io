import logo from "./logo.svg";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Ian Kane Design</Navbar.Brand>
          <Nav.Link href="https://blog.iankanedesign.com/">Blog</Nav.Link>
          <Nav.Link href="https://demos.accusoft.com/virtualviewer/">
            VirtualViewer Demo
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
