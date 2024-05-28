import React from "react";
import { Card, Button } from "react-bootstrap";

const token = "6tySK2p9ZxyKAySWyyNU";
const privateIp = "http://192.168.0.220:32400/library/sections/1/collection:";
const collections = ["100 Poster", "Horror Poster", "UrText"];
fetch(privateIp, {
  headers: { Accept: "application/json", "X-Plex-Token": token },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network Response Failure");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

const Plex = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Plex;
