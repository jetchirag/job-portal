import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Table } from "react-bootstrap";

const PartNineTen = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [part9, setPart9] = useState(true);
  const handlePart9 = () => {
    setPart9(!part9);
  };
  const [part10, setPart10] = useState(true);
  const handlePart10 = () => {
    setPart10(!part10);
  };

  return (
    <>
      <Accordion.Item eventKey="9">
        <Accordion.Header>
          9. Patent Details (in last three years)
        </Accordion.Header>
        <Accordion.Body>
          <Form.Check
            type="checkbox"
            label="if Yes?"
            onClick={handlePart9}
          ></Form.Check>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="3"
              disabled={part9}
              controlId="patent_details"
            >
              <Form.Label>Patent Details</Form.Label>
              <Form.Control
                size="sm"
                as="textarea"
                rows={1}
                disabled={part9}
                {...register("patent_details", {
                  maxLength: 500,
                })}
              />
              {errors.patent_details && (
                <p style={{ color: "red" }}>Please enter the patent details</p>
              )}
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="patent_year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                rows={3}
                disabled={part9}
                {...register("patent_year", {
                  maxLength: 500,
                })}
              />
              {errors.patent_year && (
                <p style={{ color: "red" }}>Please enter the patented year</p>
              )}
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="patent_status">
              <Form.Label>Patent Status</Form.Label>
              <Form.Select
                size="sm"
                type="text"
                rows={3}
                disabled={part9}
                {...register("patent_status", {
                  required: "Please select",
                })}
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>Filled</option>
                <option>Granted</option>
              </Form.Select>
              {errors.patent_status && (
                <p style={{ color: "red" }}> {errors.patent_status.message}</p>
              )}
            </Form.Group>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>
          10. Consultancy (in last three years)
        </Accordion.Header>
        <Accordion.Body>
          <Form.Check
            type="checkbox"
            label="if Yes?"
            onClick={handlePart10}
          ></Form.Check>
          <Form.Group>
            <Table responsive="sm">
              <thead>
                <td>#</td>
                <td>No. assignments</td>
                <td>for Amount (in INR)</td>
              </thead>
              <tbody>
                <tr>
                  <td>Completed</td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part10}
                    />
                  </td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part10}
                    />
                  </td>
                </tr>
                <tr>
                  <td>ongoing</td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part10}
                    />
                  </td>
                  <td>
                    <Form.Control
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part10}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default PartNineTen;
