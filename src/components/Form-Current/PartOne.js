import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { facultiesList } from './faculties';

const Partone = () => {
  const [faculty, setFaculty] = useState('');
  const [school, setSchool] = useState('');
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const facultyHandler = (e) => {
    setFaculty(e.target.value);
    setSchool('');
  };
  const schoolHandler = (e) => {
    setSchool(e.target.value);
  };

  return (
    <Accordion.Item eventKey='0' styles={{ height: '1rem !important' }}>
      <Accordion.Header>1. Application Information</Accordion.Header>
      <Accordion.Body>
        <Row className='mb-3'>
          <Form.Group as={Col} md='2' controlId='jobtype'>
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
              Faculty<span style={{ color: 'red' }}> *</span>
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
                School<span style={{ color: 'red' }}> *</span>
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
                Department<span style={{ color: 'red' }}> *</span>
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
