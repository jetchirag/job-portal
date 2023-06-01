import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../Department.json";
// import { facultiesList, departmentList2 } from './faculties';

const Partone = () => {
  const [dept, setDept] = useState("");
  // const [faculty, setFaculty] = useState('');
  // const [school, setSchool] = useState('');

  // const handleJobTypeChange = (event) => {
  //   setJobType(event.target.value);
  //   if (event.target.value === 'non_academic') {
  //     setFaculty('NA');
  //     setSchool('NA');
  //   }
  //   else {
  //     setFaculty('');
  //     setSchool('');
  //   }
  // };

  const {
    register,
    formState: { errors },
  } = useFormContext();
  // const facultyHandler = (e) => {
  //   setFaculty(e.target.value);
  //   setSchool('');
  // };
  const deptHandler = (e) => {
    setDept(e.target.value);
  };

  return (
    <Accordion.Item eventKey="0" styles={{ height: "1rem !important" }}>
      <Accordion.Header>1. Application Information</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          {/* <Form.Group as={Col} md='2' controlId='jobtype'>
            <Form.Label>
              Job Type<span style={{ color: 'red' }}> *</span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.jobtype}
              size='sm'
              aria-label='Default Job Type'
              {...register('jobtype', {
                required: true,
              })}
              onChange={handleJobTypeChange}
            > */}
          {/* <option selected='' disabled='' value=''> */}
          {/* Choose... */}
          {/* </option> */}
          {/* <option value='academic'>Academic</option> */}
          {/* <option value='non_academic'>Non Academic</option> */}
          {/* <option value="administration">Administrative</option> */}
          {/* </Form.Select> */}
          {/* </Form.Group> */}

          <Form.Group as={Col} md="2" controlId="deparment">
            <Form.Label>
              Department<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.department}
              size="sm"
              aria-label="Default Department Type"
              {...register("department", {
                required: true,
              })}
              placeholder="acad"
              onChange={deptHandler}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>

              {Object.keys(Data).map((dept) => {
                return <option value={dept}>{dept}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="school">
            <Form.Label>
              School<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select size="sm" aria-label="Default School Type" disabled={true}>
              <option selected="" disabled="" value="">
                {dept&&Object.keys(Data[dept])}
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="department">
            <Form.Label>
              Faculty<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              size="sm"
              aria-label="Default Faculty Type"
              disabled={true}
            >
              <option selected="" disabled="" value="">
                {dept&& Object.keys(Data[dept][Object.keys(Data[dept])[0]])}
              </option>
            </Form.Select>
          </Form.Group>

          {/* <Form.Group as={Col} md="2" controlId="faculty">
            <Form.Label>
              Nature of Job<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.natureofjob}
              size="sm"
              aria-label="Default Job Type"
              {...register("natureofjob", {
                required: true,
              })}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
            </Form.Select>
          </Form.Group> */}
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Partone;
