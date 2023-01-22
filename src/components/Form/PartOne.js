import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { facultiesList } from "./faculties";

const Partone = () => {
  const [faculty, setFaculty] = useState("");
  const [school, setSchool] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const facultyHandler = (e) => {
    setFaculty(e.target.value);
    setSchool("");

  };
  const schoolHandler = (e) => {
    setSchool(e.target.value);
  };

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>1. Application Information</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="dob">
            <Form.Label>Job Type</Form.Label>

            <Form.Select
              size="sm"
              aria-label="Default Job Type"
              {...register("jobtype", {
                required: true,
              })}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="academic">Academic</option>
              <option value="non_academic">Non Academic</option>
              <option value="administration">Administrative</option>
            </Form.Select>
            {errors.jobtype && (
              <p style={{ color: "red" }}>Please select your job type</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="faculty">
            <Form.Label>Faculty</Form.Label>
            <Form.Select
              size="sm"
              aria-label="Default Faculty Type"
              {...register("faculty", {
                required: true,
              })}
              placeholder="acad"
              onChange={facultyHandler}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>

              {Object.keys(facultiesList).map((faculty) => {
                return <option value={faculty}>{faculty}</option>;
              })}
            </Form.Select>
            {errors.faculty && (
              <p style={{ color: "red" }}>Please select your Faculty type</p>
            )}
          </Form.Group>
          {faculty && (
            <Form.Group as={Col} md="3" controlId="faculty">
              <Form.Label>School</Form.Label>
              <Form.Select
                size="sm"
                aria-label="Default Faculty Type"
                {...register("school", {
                  required: true,
                })}
                onChange={schoolHandler}
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>

                {faculty &&
                  Object.keys(facultiesList[faculty]).map((sch) => {
                    return <option value={sch}>{sch}</option>;
                  })}
              </Form.Select>
              {errors.school && (
                <p style={{ color: "red" }}>Please select your school</p>
              )}
            </Form.Group>
          )}
          {school && (
            <Form.Group as={Col} md="3" controlId="faculty">
              <Form.Label>Department</Form.Label>
              <Form.Select
                size="sm"
                aria-label="Default Faculty Type"
                {...register("dept", {
                  // required: true,
                })}
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                {school &&
                  facultiesList[faculty][school].map((dept) => {
                    return <option value={dept}>{dept}</option>;
                  })}
              </Form.Select>
              {errors.dept && (
                <p style={{ color: "red" }}>Please select your Department</p>
              )}
            </Form.Group>
          )}
          <Form.Group as={Col} md="3" controlId="faculty">
            <Form.Label>Nature of Job</Form.Label>
            <Form.Check
              type={"radio"}
              placeholder="acad"
              label={"Full-time"}
              id={"natureofjob"}
              name={"natureofjob"}
              {...register("natureofjob", {
                required: true,
              })}
            />
            <Form.Check
              type={"radio"}
              placeholder="acad"
              label={"Part-time"}
              id={"natureofjob"}
              name={"natureofjob"}
              {...register("natureofjob", {
                required: true,
              })}
            />

            {errors.natureofjob && (
              <p style={{ color: "red" }}>Please select your Nature of Job</p>
            )}
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Partone;
