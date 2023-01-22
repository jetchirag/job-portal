import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 


const PartEight=()=>{
    const {
        register,
        formState: { errors },
      } = useFormContext();
      const [part8, setPart8] = useState(true);
      const handlePart8 = () => {
        setPart8(!part8);
      }
    return(
        <Accordion.Item eventKey="8">
              <Accordion.Header>
                8.Books Authored/Co-Authored/Edited/Co-Edited (in last three
                years)
              </Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="checkbox"
                  label="if Yes?"
                  onClick={handlePart8}
                ></Form.Check>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="book_details"
                    disabled={part8}
                  >
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                      size="sm"
                      as="textarea"
                      rows={1}
                      disabled={part8}
                      {...register("book_details", {
                        maxLength: 500,
                      })}
                    />
                    {errors.book_details && (
                      <p style={{ color: "red" }}>
                        Please enter the book details
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="book_isbn">
                    <Form.Label>ISBN Number</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part8}
                      {...register("book_isbn", {
                        maxLength: 500,
                      })}
                    />
                    {errors.book_isbn && (
                      <p style={{ color: "red" }}>
                        Please enter the book isbn number
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="book_written">
                    <Form.Label>Written As</Form.Label>
                    <Form.Select
                      size="sm"
                      type="text"
                      rows={3}
                      disabled={part8}
                      {...register("book_written", {})}
                    >
                      <option value="" />
                      <option value="principal-writer">Principal Writer</option>
                      <option value="co-writer">Co Writer</option>
                    </Form.Select>
                    {errors.book_written && (
                      <p style={{ color: "red" }}>
                        {" "}
                        {errors.book_written.message}
                      </p>
                    )}
                  </Form.Group>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
    );
}

export default PartEight;