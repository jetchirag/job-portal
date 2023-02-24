import React from "react";
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import data from "./JobListing.json";
import { useForm } from "react-hook-form";

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { facultiesList } from './Form-Current/faculties';

const JobListing = () => {
  const [faculty, setFaculty] = useState('');
  const [school, setSchool] = useState('');
  const facultyHandler = (e) => {
    setFaculty(e.target.value);
    setSchool('');
  };
  const schoolHandler = (e) => {
    setSchool(e.target.value);
  };

  const h2Style = {
    margin: "2% 0",
    fontSize: "3rem",
    fontWeight: "400",
    textAlign: "center",
  };
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <Container>
      
      <h2 style={h2Style}>Add New Job Listing</h2>
      <form className="row g-3" post="/" method="post">
      <Row className='mb-3'>
          <Form.Group as={Col} md='2' controlId='jobtype'>
            <Form.Label>
              Job Type<span style={{ color: 'red' }}> </span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.jobtype}
              size='sm'
              aria-label='Default Job Type'
              {...register('jobtype', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='academic'>Academic</option>
              <option value='non_academic'>Non Academic</option>
              {/* <option value="administration">Administrative</option> */}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md='2' controlId='faculty'>
            <Form.Label>
              Faculty<span style={{ color: 'red' }}> </span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.faculty}
              size='sm'
              aria-label='Default Faculty Type'
              {...register('faculty', {
                required: true,
              })}
              placeholder='acad'
              onChange={facultyHandler}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>

              {Object.keys(facultiesList).map((faculty) => {
                return <option value={faculty}>{faculty}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {faculty && (
            <Form.Group as={Col} md='2' controlId='school'>
              <Form.Label>
                School<span style={{ color: 'red' }}> </span>
              </Form.Label>
              <Form.Select
                isInvalid={errors.school}
                size='sm'
                aria-label='Default Faculty Type'
                {...register('school', {
                  required: true,
                })}
                onChange={schoolHandler}
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>

                {faculty &&
                  Object.keys(facultiesList[faculty]).map((sch) => {
                    return <option value={sch}>{sch}</option>;
                  })}
              </Form.Select>
            </Form.Group>
          )}
          {school && (
            <Form.Group as={Col} md='2' controlId='department'>
              <Form.Label>
                Department<span style={{ color: 'red' }}> </span>
              </Form.Label>
              <Form.Select
                isInvalid={errors.dept}
                size='sm'
                aria-label='Default Faculty Type'
                {...register('department', {
                  required: true,
                })}
              >
                <option selected='' disabled='' value=''>
                  Choose...
                </option>
                {school &&
                  facultiesList[faculty][school].map((dept) => {
                    return <option value={dept}>{dept}</option>;
                  })}
              </Form.Select>
            </Form.Group>
          )}
          {/* <Form.Group as={Col} md="2" controlId="faculty">
            <Form.Label>
              Nature of Job<span style={{ color: "red" }}> </span>
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
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="heading"
            name="heading"
            placeholder="Job Tile"
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea" className="form-label">
            Details
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea"
            rows="3"
            placeholder="Enter Card Body Text"
            name="invite"
            autocomplete="off"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="formFile2" class="form-label">
            Poster
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile2"
            {...register("jobdetails")}
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <hr></hr>
      <h3>Delete Listing</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job ID</th>
            <th scope="col">Due Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{item.jobid}</td>
              <td>{item.duedate}</td>
              <td>
                <Button variant="contained" color="primary">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default JobListing;
