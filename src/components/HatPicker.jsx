import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { randomMax } from "../js/Helper.js";

const Home = () => {
  const [result, setResult] = useState("Result");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [option6, setOption6] = useState("");

  var handleButtonClick = (e) => {
    var count = getUsedInputsCount();
    var hat = randomMax(count);
    switch (hat) {
      case 0:
        setResult(option1);
        break;
      case 1:
        setResult(option2);
        break;
      case 2:
        setResult(option3);
        break;
      case 3:
        setResult(option4);
        break;
      case 4:
        setResult(option5);
        break;
      case 5:
        setResult(option6);
        break;
      default:
        console.log("BUSTED");
    }
  };

  var handleChange = (setter) => {
    return (e) => {
      setter(e.target.value);
    };
  };

  var getUsedInputsCount = () =>{
    var count = 0;
    if(option1 != ""){
      count ++;
    }
    if(option2 != ""){
      count ++;
    }
    if(option3 != ""){
      count ++;
    }
    if(option4 != ""){
      count ++;
    }
    if(option5 != ""){
      count ++;
    }
    if(option6 != ""){
      count ++;
    }
    return count;
  };

  return (
    <>
      <Container fluid="md" data-bs-theme="dark">
        <Form width={0.5}>
          <Row className="mt-2">
            <Col>
              <Form.Control
                value={option1}
                onChange={handleChange(setOption1)}
                placeholder="Option 1"
              />
            </Col>
            <Col>
              <Form.Control
                value={option2}
                onChange={handleChange(setOption2)}
                placeholder="Option 2"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Control
                value={option3}
                onChange={handleChange(setOption3)}
                placeholder="Option 3"
              />
            </Col>
            <Col>
              <Form.Control
                value={option4}
                onChange={handleChange(setOption4)}
                placeholder="Option 4"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <Form.Control
                value={option5}
                onChange={handleChange(setOption5)}
                placeholder="Option 5"
              />
            </Col>
            <Col>
              <Form.Control
                value={option6}
                onChange={handleChange(setOption6)}
                placeholder="Option 6"
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col width={3}>
              <Button onClick={handleButtonClick}>Pick from a hat!</Button>
            </Col>
            <Col width={7}>
              <Form.Control
                type="text"
                disabled
                readOnly
                value={result}
              ></Form.Control>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Home;
