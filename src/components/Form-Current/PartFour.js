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
    <Accordion.Item eventKey='3'>
      <Accordion.Header>4.Qualified in:</Accordion.Header>
      <Accordion.Body>
        <Row className='mb-3'>
          {/* Gate Details  */}

          <Form.Group as={Col} md='2' controlId='gate'>
            <Form.Label>Gate Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("gate", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Gate Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>

          {/* UGC Net Details  */}

          <Form.Group as={Col} md='2' controlId='ugcNet'>
            <Form.Label> UGC Net Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("ugcNet", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                UGC Net Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* UGC JRF Details  */}

          <Form.Group as={Col} md='2' controlId='ugcJrf'>
            <Form.Label>UGC JRF Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("ugcJrf", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                UGC JRF Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* URC CSIR Details  */}

          <Form.Group as={Col} md='2' controlId='urcCsir'>
            <Form.Label>URC CSIR Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("urcCsir", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                URC CSIR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* ICMR Details  */}

          <Form.Group as={Col} md='2' controlId='icmr'>
            <Form.Label>ICMR Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("icmr", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                ICMR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* ICAR Details  */}

          <Form.Group as={Col} md='2' controlId='icar'>
            <Form.Label>ICAR Year</Form.Label>
            <Form.Select
              size='sm'
              {...register("icar", {
                // required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                ICAR Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartFour;
