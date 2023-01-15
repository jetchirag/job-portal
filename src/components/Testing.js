import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

const Testing = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="my-4">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        action="/"
        method="POST"
      >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Application Information</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Personal Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="firstname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstname"
                    placeholder="First name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your first name.
                  </Form.Control.Feedback>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="lastname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your Last Name.
                  </Form.Control.Feedback>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="dob"
                    placeholder="DD/MM/YYYY"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select your date of birth
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                  >
                    <option disabled selected>
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please select your gender
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      +91
                    </InputGroup.Text>
                    <Form.Control
                      required
                      type="number"
                      min="1000000000"
                      max="9999999999"
                      name="mobile"
                      placeholder="Mobile No."
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your mobile number
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="Email ID"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your email id
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default Testing;
