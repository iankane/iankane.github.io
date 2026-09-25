import React, { useState, useEffect } from "react";
import useFocus from './AutoFocus.jsx';
import { Form, Button, Row, Col, Container, Stack, ListGroup } from "react-bootstrap";
import { ChooseRandom, randomMax } from "../js/Helper.js";

const Home = () => {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const inputRef = useFocus();

  var addToList = () => {
    if (input != "") {
      setOptions([
        ...options,
        { title: input, isSelected: false }
      ]);
      setInput("");
    }
  }

  var handleChange = (setter) => {
    return (e) => {
      setter(e.target.value);
    };
  };

  var handleEnter = (e) => {
    if (e != null && e.key === 'Enter') {
      addToList();
    }
  };

  var handleRemoveFromList = (e) => {
    if (e != null) {
      var title = e.target.innerHTML;
      var tempOptions = options.filter((o) => o.title != title)
      setOptions(tempOptions);
    }
  };

  var handleAddButtonClick = (e) => {
    addToList();
  };

  var handlePullButtonClick = (e) => {
    var choice = Math.floor(Math.random() * options.length);
    var opt = options.slice();
    opt.forEach(option => {
      option.isSelected = false;
    });
    opt[choice].isSelected = true;
    setOptions(opt);
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
                onKeyDown={handleEnter}
                placeholder="Option"
                ref={inputRef}
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
                <ListGroup.Item key={option.title} style={{ color: "ivory", background: option.isSelected ? "green" : "grey" }} onClick={handleRemoveFromList}>{option.title}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
