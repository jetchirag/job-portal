import React from "react";
// import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const PartFour = () =>{
    const { register, formState: { errors } } = useFormContext();

    return(
        <Accordion.Item eventKey="3">
        <Accordion.Header>4.Qualified in:</Accordion.Header>
        <Accordion.Body>
          <Row className="mb-3">
            {/* Gate Details  */}
            <Form.Group as={Col} md="3" controlId="gate">
              <Form.Label>Gate Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Gate Year"
                type="number"
                {...register("gate", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.gate && (
                <p style={{ color: "red" }}>
                  Please enter your gate year
                </p>
              )}
            </Form.Group>
            {/* UGC Net Details  */}
            <Form.Group as={Col} md="3" controlId="ugcNet">
              <Form.Label>UGC Net Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="UGC Net Year"
                type="number"
                {...register("ugcNet", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.ugcNet && (
                <p style={{ color: "red" }}>
                  Please enter your UGC Net year
                </p>
              )}
            </Form.Group>
            {/* UGC JRF Details  */}
            <Form.Group as={Col} md="3" controlId="ugcJrf">
              <Form.Label>UGC JRF Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="UGC JRF Year"
                type="number"
                {...register("ugcJrf", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.ugcJrf && (
                <p style={{ color: "red" }}>
                  Please enter your UGC JRF year
                </p>
              )}
            </Form.Group>
            {/* URC CSIR Details  */}
            <Form.Group as={Col} md="3" controlId="urcCsir">
              <Form.Label>URC CSIR Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="URC CSIR Year"
                type="number"
                {...register("urcCsir", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.urcCsir && (
                <p style={{ color: "red" }}>
                  Please enter your URC CSIR year
                </p>
              )}
            </Form.Group>
            {/* ICMR Details  */}
            <Form.Group as={Col} md="3" controlId="icmr">
              <Form.Label>ICMR Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="ICMR Year"
                type="number"
                {...register("icmr", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.icmr && (
                <p style={{ color: "red" }}>
                  Please enter your ICMR year
                </p>
              )}
            </Form.Group>
            {/* ICAR Details  */}
            <Form.Group as={Col} md="3" controlId="icar">
              <Form.Label>ICAR Year</Form.Label>
              <Form.Control
                size="sm"
                placeholder="ICAR Year"
                type="number"
                {...register("icar", {
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              {errors.icar && (
                <p style={{ color: "red" }}>
                  Please enter your ICAR year
                </p>
              )}
            </Form.Group>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    );
}

export default PartFour;