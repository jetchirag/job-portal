import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CountryDropdown } from 'react-country-region-selector';

const PartFive = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [academicExperience_country, setacademicExperience_country] =
    useState('');
  const [nonAcademicExperience_country, setnonAcademicExperience_country] =
    useState('');
  const [acad, setAcad] = useState(['set']);
  const [nonAcad, setNonAcad] = useState(['set']);

  const addAcad = () => {
    setAcad([...acad, 'set']);
  };
  const addNonAcad = () => {
    setNonAcad([...nonAcad, 'set']);
  };

  const removeAcad = () => {
    const copyArr = [...acad];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setAcad(copyArr);
  };

  return (
    <Accordion.Item eventKey='4'>
      <Accordion.Header>5. Experience</Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Academic</b>
        </p>
        {acad.map(() => {
          return (
            <Row className='mb-3'>
              {/* Nature of job  */}
              <Form.Group as={Col} md='3' controlId='academicExperience_mode'>
                <Form.Label>Nature of Job</Form.Label>
                <Form.Select
                  size='sm'
                  {...register('academicExperience_mode', {
                    // required: "Please select the nature of your job",
                  })}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  <option value='regular'>Regular</option>
                  <option value='part-time'>Part-Time</option>
                </Form.Select>
                {errors.academicExperience_mode && (
                  <p style={{ color: 'red' }}>
                    {' '}
                    {errors.academicExperience_mode.message}
                  </p>
                )}
              </Form.Group>
              {/* Country of job  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='academicExperience_country'
              >
                <Form.Label>Country</Form.Label>
                <CountryDropdown
                  value={academicExperience_country}
                  onChange={(val) => setacademicExperience_country(val)}
                  className='form-control-sm form-control'
                  // {...register("native_country", {
                  //   required: true,
                  // })}
                />
                {errors.academicExperience_country && (
                  <p style={{ color: 'red' }}>Please select your country</p>
                )}
              </Form.Group>
              {/* University  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='academicExperience_university'
              >
                <Form.Label>University</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='University'
                  isInvalid={errors.academicExperience_university}
                  type='text'
                  {...register('academicExperience_university', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* College Name  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='academicExperience_college'
              >
                <Form.Label>College</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='College Name'
                  isInvalid={errors.academicExperience_college}
                  type='text'
                  {...register('academicExperience_college', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Postion of work  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='academicExperience_position'
              >
                <Form.Label>Position</Form.Label>
                <Form.Select
                  size='sm'
                  isInvalid={errors.academicExperience_position}
                  {...register('academicExperience_position', {
                    required: 'Please select the position you worked in',
                  })}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  <option value='professor'>Professor</option>
                  <option value='associate-professor'>
                    Associate Professor
                  </option>
                  <option value='assistant-professor'>
                    Assistant Professor
                  </option>
                  <option value='research-assistant'>Research Assistant</option>
                </Form.Select>
              </Form.Group>
              {/* Academic Domain Details  */}
              <Form.Group as={Col} md='3' controlId='academicExperience_domain'>
                <Form.Label>Academic Domain</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='Academic Domain'
                  isInvalid={errors.academicExperience_domain}
                  type='text'
                  {...register('academicExperience_domain', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Working From Date Details  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='academicExperience_datefrom'
              >
                <Form.Label>Date From</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='DD/MM/YYYY'
                  type='date'
                  {...register('academicExperience_datefrom')}
                />
                {errors.academicExperience_datefrom && (
                  <p style={{ color: 'red' }}>
                    Please select the date you are working from
                  </p>
                )}
              </Form.Group>
              {/* Working To Date Details  */}
              <Form.Group as={Col} md='3' controlId='academicExperience_dateto'>
                <Form.Label>Date To</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='DD/MM/YYYY'
                  type='date'
                  {...register('academicExperience_dateto')}
                />
                {errors.academicExperience_dateto && (
                  <p style={{ color: 'red' }}>
                    Please select the date you are working to
                  </p>
                )}
              </Form.Group>
            </Row>
          );
        })}
        <button type='button' onClick={addAcad} className='add-more-btn'>
          Add New
        </button>{' '}
        <button type='button' onClick={removeAcad} className='add-more-btn'>
          Remove Last
        </button>
        <hr />
        <p>
          <b>Non Academic</b>
        </p>
        {nonAcad.map(() => {
          return (
            <Row className='mb-3'>
              {/* Nature of job  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_mode'
              >
                <Form.Label>Nature of Job</Form.Label>
                <Form.Select
                  size='sm'
                  isInvalid={errors.nonAcademicExperience_mode}
                  {...register('nonAcademicExperience_mode', {
                    required: 'Please select the nature of your job',
                  })}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  <option value='regular'>Regular</option>
                  <option value='part-time'>Part-Time</option>
                </Form.Select>
              </Form.Group>
              {/* Country of job  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_country'
              >
                <Form.Label>Country</Form.Label>
                <CountryDropdown
                  value={nonAcademicExperience_country}
                  onChange={(val) => setnonAcademicExperience_country(val)}
                  className='form-control-sm form-control'
                  isInvalid={errors.nonAcademicExperience_country}
                  // {...register("native_country", {
                  //   required: true,
                  // })}
                />
              </Form.Group>
              {/* Organization Name  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_organization'
              >
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='Organization Name'
                  type='text'
                  isInvalid={errors.nonAcademicExperience_organization}
                  {...register('nonAcademicExperience_organization', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Designation Name  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_designation'
              >
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='Designation Name'
                  isInvalid={errors.nonAcademicExperience_designation}
                  type='text'
                  {...register('nonAcademicExperience_designation', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Department Name  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_department'
              >
                <Form.Label>Department</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='Department Name'
                  type='text'
                  isInvalid={errors.nonAcademicExperience_department}
                  {...register('nonAcademicExperience_department', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Working From Date Details  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_datefrom'
              >
                <Form.Label>Date From</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='DD/MM/YYYY'
                  type='date'
                  isInvalid={errors.nonAcademicExperience_datefrom}
                  {...register('nonAcademicExperience_datefrom')}
                />
              </Form.Group>
              {/* Working To Date Details  */}
              <Form.Group
                as={Col}
                md='3'
                controlId='nonAcademicExperience_dateto'
              >
                <Form.Label>Date To</Form.Label>
                <Form.Control
                  size='sm'
                  placeholder='DD/MM/YYYY'
                  type='date'
                  {...register('nonAcademicExperience_dateto')}
                />
                {errors.nonAcademicExperience_dateto && (
                  <p style={{ color: 'red' }}>
                    Please select the date you are working to
                  </p>
                )}
              </Form.Group>
            </Row>
          );
        })}
        <button type='button' onClick={addNonAcad} className='add-more-btn'>
          Add
        </button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartFive;
