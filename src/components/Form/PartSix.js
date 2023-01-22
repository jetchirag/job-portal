import React from "react";
// import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PartSix =()=>{
    const { register, formState: { errors } } = useFormContext();

    return (
        <Accordion.Item eventKey="5">
        <Accordion.Header>6. Fellowships Achieved</Accordion.Header>
        <Accordion.Body>
          <Row className="mb-3">
            {/* Fellowship Details  */}
            <Form.Group as={Col} md="12" controlId="fellowship_details">
              <Form.Label>Fellowship Detail</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Fellowship Detail"
                type="text"
                {...register("fellowship_details", {
                  required: false,
                  maxLength: 300,
                })}
              />
              {errors.fellowship_details && (
                <p style={{ color: "red" }}>
                  Please enter your fellowship detail
                </p>
              )}
            </Form.Group>
            {/* Fellowship Year Detail  */}
            <Form.Group as={Col} md="3" controlId="fellowship_year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Year"
                type="number"
                {...register("fellowship_year", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.fellowship_year && (
                <p style={{ color: "red" }}>
                  Please enter your fellowship year
                </p>
              )}
            </Form.Group>
            {/* Fellowship Amount Detail  */}
            <Form.Group as={Col} md="3" controlId="fellowship_amount">
              <Form.Label>Amount per annum</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Amount per annum"
                type="number"
                {...register("fellowship_amount", {
                  maxLength: 15,
                  minLength: 0,
                })}
              />
              {errors.fellowship_amount && (
                <p style={{ color: "red" }}>
                  Please enter your fellowship amount per annum
                </p>
              )}
            </Form.Group>
            {/* Fellowship Status Details  */}
            <Form.Group as={Col} md="3" controlId="fellowship_status">
              <Form.Label>Fellowship Status</Form.Label>
              <Form.Select {...register("fellowship_status", {})}>
                <option value="" />
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </Form.Select>
              {errors.fellowship_status && (
                <p style={{ color: "red" }}>
                  {" "}
                  {errors.fellowship_status.message}
                </p>
              )}
            </Form.Group>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    )
}

export default PartSix;