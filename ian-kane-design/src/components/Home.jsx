import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import headshot from "../resources/Headshot.jpg";
const Home = () => {
  return (
    <Container data-bs-theme="dark">
      <Row className="justify-content-md-center mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={headshot} className="mt-3" />
          <Card.Body>
            <Card.Title>Ian Kane</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Senior Software Developer
            </Card.Subtitle>
            <Card.Text>
              Jack of all trades application developer seeking employment.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Home;
