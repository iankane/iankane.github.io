import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Stack, ListGroup } from "react-bootstrap";
import { ChooseRandom, randomMax } from "../js/Helper.js";

const Home = () => {
  const [result, setResult] = useState("Result");
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  var handleAddButtonClick = (e) => {
    if (input != "") {
      setOptions([
        ...options,
        input
      ]);
      setInput("");
    }
  };

  var handlePullButtonClick = (e) => {
    setResult(options[Math.floor(Math.random() * options.length)]);
  };

  var handleChange = (setter) => {
    return (e) => {
      setter(e.target.value);
    };
  };

  var handleRemoveFromList = (e) => {
    if (e != null) {
      var title = e.target.innerHTML;
      var tempOptions = options.filter((o) => o != title)
      setOptions(tempOptions);
    }
  }

  var getUsedInputsCount = () => {
    var count = 0;

    return count;
  };

  return (
    <>
      <Container data-bs-theme="dark" >
        <Row>
          <Col className="col-md-6">
            <Form>
              <Form.Control
                value={input}
                onChange={handleChange(setInput)}
                placeholder="Option"
              />
              <Stack gap={2} className="col-md-4 mx-auto">
                <Button onClick={handleAddButtonClick}>Add to selection</Button>
                <Button style={{ background: "green" }} onClick={handlePullButtonClick}>Pick from a hat!</Button>
              </Stack>
            </Form>
          </Col>
          <Col className="col-md-6">
            <ListGroup >
              {options.map(option => (
                <ListGroup.Item style={{ color: "ivory" }} onClick={handleRemoveFromList}>{option}</ListGroup.Item>
              ))}
            </ListGroup>
            <Form.Control
              type="text"
              disabled
              readOnly
              value={result}
            ></Form.Control>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
