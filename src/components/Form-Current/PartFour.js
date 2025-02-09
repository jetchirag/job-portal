import React, { useState, useEffect } from "react";
// import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PartFour = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [years, setYears] = useState([]);
  useEffect(() => {
    let c = [];
    for (let i = 1975; i <= 2023; i++) {
      c = [...c, i];
    }

    setYears(c);
  }, []);
  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>4.Qualified in:</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          {/* Gate Details  */}

          <Form.Group as={Col} md="2" controlId="gate">
            <Form.Label>Gate Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("gate", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                Gate Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="gate_score">
            <Form.Label>Gate Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.gate_score}
              placeholder="Gate Score"
              type="text"
              {...register("gate_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>

          {/* UGC Net Details  */}

          <Form.Group as={Col} md="2" controlId="ugcNet">
            <Form.Label> UGC-NET Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("ugcNet", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                UGC Net Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="ugcNet_score">
            <Form.Label>UGC-NET Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.ugcNet_score}
              placeholder="UGC-NET Score"
              type="text"
              {...register("ugcNet_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>
          {/* UGC JRF Details  */}

          <Form.Group as={Col} md="2" controlId="ugcJrf">
            <Form.Label>UGC JRF Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("ugcJrf", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                UGC JRF Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="ugcJrf_score">
            <Form.Label>UGC-JRF Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.ugcJrf_score}
              placeholder="UGC-JRF Score"
              type="text"
              {...register("ugcJrf_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>

          {/* URC CSIR Details  */}

          <Form.Group as={Col} md="2" controlId="urcCsir">
            <Form.Label>URC CSIR Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("urcCsir", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                URC CSIR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="urcCsir_score">
            <Form.Label style={{ width: "110%" }}>UGC-CSIR Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.urcCsir_score}
              placeholder="UGC-CSIR Score"
              type="text"
              {...register("urcCsir_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>

          {/* ICMR Details  */}

          <Form.Group as={Col} md="2" controlId="icmr">
            <Form.Label>ICMR Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("icmr", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                ICMR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="icmr_score">
            <Form.Label style={{ width: "110%" }}>ICMR Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.icmr_score}
              placeholder="ICMR Score"
              type="text"
              {...register("icmr_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>

          {/* ICAR Details  */}

          <Form.Group as={Col} md="2" controlId="icar">
            <Form.Label>ICAR Year</Form.Label>
            <Form.Select
              size="sm"
              {...register("icar", {
                // required: false,
              })}
            >
              <option selected="" disabled="" value="">
                ICAR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="icar_score">
            <Form.Label style={{ width: "110%" }}>ICAR Score</Form.Label>
            <Form.Control
              className="small"
              isInvalid={errors.icar_score}
              placeholder="ICAR Score"
              type="text"
              {...register("icar_score", {
                required: false,
                maxLength: 100,
              })}
            />
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartFour;
