import React, { useState } from 'react';
import { set, useFormContext } from 'react-hook-form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const PartThree = () => {
  const [mphilVal, setMphil] = useState(true);
  const handleMphil = () => {
    setMphil(!mphilVal);
  };
  const [pdocVal, setPdoc] = useState(true);
  const handlePdoc = () => {
    setPdoc(!pdocVal);
  };
  const [aq_higher_secondary_country, setaq_higher_secondary_country] =
    useState('');
  const [aq_graduation_country, setaq_graduation_country] = useState('');
  const [aq_post_graduation_country, setaq_post_graduation_country] =
    useState('');
  const [aq_mphil_country, setaq_mphil_country] = useState('');
  const [aq_phd_country, setaq_phd_country] = useState('');
  const [aq_post_doctoral_country, setaq_post_doctoral_country] = useState('');
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [graduate, setGraduate] = useState(['set']);
  const [postGraduate, setPostGraduate] = useState(['set']);
  const [mPhill, setMPhill] = useState(['set']);
  const [phD, setPhD] = useState(['set']);
  const [pDoctoral, setpDoctoral] = useState(['set']);

  const addGrad = () => {
    setGraduate([...graduate, 'set']);
  };
  const addPostGrad = () => {
    setPostGraduate([...postGraduate, 'set']);
  };
  const addMPhill = () => {
    setMPhill([...mPhill, 'set']);
  };
  const addPhD = () => {
    setPhD([...phD, 'set']);
  };
  const addPDoctoral = () => {
    setpDoctoral([...pDoctoral, 'set']);
  };
  return (
    <Accordion.Item eventKey='2'>
      <Accordion.Header>
        3. Academic / Professional Qualificaiton
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Higher Seconday / Class 12th</b>
        </p>
        <Row className='mb-3'>
          <Form.Group
            as={Col}
            md='2'
            controlId='aq_higher_secondary_country'
            size='sm'
          >
            {/* Academic Qualification Higher Seconday Country  */}
            <Form.Label>
              Country<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <CountryDropdown
              value={aq_higher_secondary_country}
              onChange={(val) => setaq_higher_secondary_country(val)}
              className={'form-control form-control-sm'}
              // {...register("cr_country", {
              //   required: true,
              // })}
            />
            {errors.aq_higher_secondary_country && (
              <p style={{ color: 'red' }}>Please select your country</p>
            )}
          </Form.Group>
          {/* Academic Qulalification Higher Secondary Country  */}
          {/* Academic Qualification Education Mode Details  */}
          <Form.Group as={Col} md='2' controlId='higher_secondary_mode'>
            <Form.Label>
              Education Mode<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.higher_secondary_mode}
              size='sm'
              {...register('higher_secondary_mode', {
                required: 'Please select your mode of educatoin',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              higher_secondary_mode
              <option value='regular'>Regular</option>
              <option value='part-time'>Part-Time</option>
              <option value='distance-learning-online'>
                Distance Learning / Online
              </option>
            </Form.Select>
          </Form.Group>
          {/* School  */}
          <Form.Group as={Col} md='2' controlId='school'>
            <Form.Label>
              School<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.school}
              size='sm'
              placeholder='School Name'
              type='text'
              {...register('school', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Board  */}
          <Form.Group as={Col} md='2' controlId='board'>
            <Form.Label>
              Board<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.board}
              size='sm'
              placeholder='Board Name'
              type='text'
              {...register('board', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Passing Year  */}
          <Form.Group as={Col} md='2' controlId='passingYear'>
            <Form.Label>
              Passing Year<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.passingYear}
              size='sm'
              placeholder='Passing Year'
              type='number'
              {...register('passingYear', {
                required: true,
                maxLength: 4,
                minLength: 4,
              })}
            />
          </Form.Group>
          {/* Division Details  */}
          <Form.Group as={Col} md='2' controlId='division'>
            <Form.Label>
              Division<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.division}
              size='sm'
              {...register('division', {
                required: 'Please select your division',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='first'>First</option>
              <option value='second'>Second</option>
              <option value='third'>Third</option>
            </Form.Select>
          </Form.Group>
          {/* Aggregate Percentage  */}
          <Form.Group as={Col} md='2' controlId='percentage'>
            <Form.Label>
              Aggregate Percentage<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.percentage}
              size='sm'
              placeholder='Aggregate Percentage'
              type='number'
              {...register('percentage', {
                required: true,
                minValue: 0,
                maxValue: 100,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Graduate</b>
        </p>
        {graduate.map(() => {
          return (
            <>
              <Row className='mb-3'>
                <Form.Group as={Col} md='2' controlId='aq_graduation_country'>
                  {/* Academic Qualification Graduate Country  */}
                  <Form.Label>
                    Country<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <CountryDropdown
                    isInvalid={errors.aq_graduation_country}
                    value={aq_graduation_country}
                    onChange={(val) => setaq_graduation_country(val)}
                    className='form-control-sm form-control'
                    // {...register("cr_country", {
                    //   required: true,
                    // })}
                  />
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_mode'>
                  <Form.Label>
                    Education Mode<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_mode}
                    size='sm'
                    {...register('graduation_mode', {
                      required: 'Please select your mode of educatoin',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md='2' controlId='graduation_institute'>
                  <Form.Label>
                    University / Institute
                    <span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_institute}
                    size='sm'
                    placeholder='University/Institute Name'
                    type='text'
                    {...register('graduation_institute', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md='2' controlId='graduation_college'>
                  <Form.Label>
                    College<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_college}
                    size='sm'
                    placeholder='College Name'
                    type='text'
                    {...register('graduation_college', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md='2' controlId='graduation_year'>
                  <Form.Label>
                    Graduation Year<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_year}
                    size='sm'
                    placeholder='Graduation Year'
                    type='number'
                    {...register('graduation_year', {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_area'>
                  <Form.Label>
                    Area<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_area}
                    size='sm'
                    placeholder='Area'
                    type='text'
                    {...register('graduation_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_course'>
                  <Form.Label>
                    Course Name<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_course}
                    size='sm'
                    placeholder='Course Name'
                    type='text'
                    {...register('graduation_course', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_division'>
                  <Form.Label>
                    Division<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_division}
                    size='sm'
                    {...register('graduation_division', {
                      required: 'Please select your division',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    <option value='first'>First</option>
                    <option value='second'>Second</option>
                    <option value='third'>Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group as={Col} md='2' controlId='graduation_percentage'>
                  <Form.Label>
                    Aggregate Percentage<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_percentage}
                    size='sm'
                    placeholder='Aggregate Percentage'
                    type='number'
                    {...register('graduation_percentage', {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            </>
          );
        })}
        <button type='button' onClick={addGrad} className='add-more-btn'>
          Add
        </button>
        <hr />
        <p>
          <b>Post Graduate</b>
        </p>
        {postGraduate.map(() => {
          return (
            <>
              <Row className='mb-3'>
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='aq_post_graduate_country'
                >
                  {/* Academic Qualification Post Graduate Country  */}
                  <Form.Label>
                    Country<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <CountryDropdown
                    value={aq_post_graduation_country}
                    onChange={(val) => setaq_post_graduation_country(val)}
                    className='form-control-sm form-control'
                    // {...register("cr_country", {
                    //   required: true,
                    // })}
                  />
                  {errors.aq_post_graduation_country && (
                    <p style={{ color: 'red' }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_mode'>
                  <Form.Label>
                    Education Mode<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_mode}
                    size='sm'
                    {...register('graduation_mode', {
                      required: 'Please select your mode of educatoin',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='post_graduation_institute'
                >
                  <Form.Label>
                    University / Institute
                    <span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_institute}
                    placeholder='University/Institute Name'
                    type='text'
                    {...register('post_graduation_institute', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_college'>
                  <Form.Label>
                    College<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_college}
                    size='sm'
                    placeholder='College Name'
                    type='text'
                    {...register('post_graduation_college', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_year'>
                  <Form.Label>
                    Graduation Year<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_year}
                    size='sm'
                    placeholder='Graduation Year'
                    type='number'
                    {...register('post_graduation_year', {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_area'>
                  <Form.Label>
                    Area<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_area}
                    size='sm'
                    placeholder='Area'
                    type='text'
                    {...register('post_graduation_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_course'>
                  <Form.Label>
                    Course Name<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_course}
                    size='sm'
                    placeholder='Course Name'
                    type='text'
                    {...register('post_graduation_course', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='post_graduation_division'
                >
                  <Form.Label>
                    Division<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_graduation_division}
                    size='sm'
                    {...register('post_graduation_division', {
                      required: 'Please select your division',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    <option value='first'>First</option>
                    <option value='second'>Second</option>
                    <option value='third'>Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Post Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='post_graduation_percentage'
                >
                  <Form.Label>
                    Aggregate Percentage<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_percentage}
                    size='sm'
                    placeholder='Aggregate Percentage'
                    type='number'
                    {...register('post_graduation_percentage', {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            </>
          );
        })}
        <button type='button' onClick={addPostGrad} className='add-more-btn'>
          Add
        </button>
        <hr />
        <p>
          <b>Ph.D</b>
        </p>
        {phD.map(() => {
          return (
            <Row className='mb-3'>
              {/* PHD Status Details  */}
              <Form.Group as={Col} md='2' controlId='phd_status'>
                <Form.Label>
                  Status<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Select
                  size='sm'
                  isInvalid={errors.phd_status}
                  {...register('phd_status', {
                    required: 'Please select your status',
                  })}
                >
                  <option value='' />
                  <option value='pursuing'>Pursuing</option>
                  <option value='awarded'>awarded</option>
                  <option value='thesis-submitted'>Thesis Submitted</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md='2' controlId='aq_phd_country'>
                {/* Academic Qualification PhD Country  */}
                <Form.Label>
                  Country<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <CountryDropdown
                  value={aq_phd_country}
                  onChange={(val) => setaq_phd_country(val)}
                  className='form-control-sm form-control'
                  // {...register("cr_country", {
                  //   required: true,
                  // })}
                />
              </Form.Group>
              {/* Academic Qualification Education Mode Details  */}
              <Form.Group as={Col} md='2' controlId='phd_mode'>
                <Form.Label>
                  Education Mode<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Select
                  title='Choose..'
                  size='sm'
                  isInvalid={errors.phd_mode}
                  {...register('phd_mode', {
                    required: 'Please select your mode of educatoin',
                  })}
                >
                  <option value='' selected=''></option>
                  <option value='regular'>Regular</option>
                  <option value='part-time'>Part-Time</option>
                  <option value='distance-learning-online'>
                    Distance Learning / Online
                  </option>
                </Form.Select>
              </Form.Group>
              {/* University / Institute  */}
              <Form.Group as={Col} md='2' controlId='phd_institute'>
                <Form.Label>
                  University / Institute<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  size='sm'
                  isInvalid={errors.phd_institute}
                  placeholder='University/Institute Name'
                  type='text'
                  {...register('phd_institute', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* College Name  */}
              <Form.Group as={Col} md='2' controlId='phd_college'>
                <Form.Label>
                  College<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  size='sm'
                  isInvalid={errors.phd_college}
                  placeholder='College Name'
                  type='text'
                  {...register('phd_college', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Completion Year  */}
              <Form.Group as={Col} md='2' controlId='phd_year'>
                <Form.Label>
                  Completion Year<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_year}
                  size='sm'
                  placeholder='Completion Year'
                  type='number'
                  {...register('phd_year', {
                    required: true,
                    maxLength: 4,
                    minLength: 4,
                  })}
                />
              </Form.Group>
              {/* Area Details  */}
              <Form.Group as={Col} md='2' controlId='phd_area'>
                <Form.Label>
                  Area<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_area}
                  size='sm'
                  placeholder='Area'
                  type='text'
                  {...register('phd_area', {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* If pursuilng teaching experiance during phd  */}
              <Form.Group as={Col} md='2' controlId='phd_teaching_experience'>
                <Form.Label>
                  If pursuing, teaching experience during PhD
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Select
                  isInvalid={errors.phd_teaching_experience}
                  size='sm'
                  {...register('phd_teaching_experience', {
                    required: 'Please select your mode of educatoin',
                  })}
                >
                  <option value='' />
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </Form.Select>
              </Form.Group>
              {/* Anticipated Completion Year  */}
              <Form.Group as={Col} md='2' controlId='phd_anti_completion_year'>
                <Form.Label>
                  Anticipated Completion Year
                  <span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_anti_completion_year}
                  size='sm'
                  placeholder='Anticipated Completion Year'
                  type='number'
                  {...register('phd_anti_completion_year', {
                    required: true,
                    maxLength: 4,
                    minLength: 4,
                  })}
                />
              </Form.Group>
            </Row>
          );
        })}
        <button type='button' onClick={addPhD} className='add-more-btn'>
          Add
        </button>
        <hr />
        <p>
          <b>M Phil</b>
          <Form.Check
            type='checkbox'
            label='if Yes?'
            onClick={handleMphil}
          ></Form.Check>
        </p>
        {!mphilVal &&
          mPhill.map(() => {
            return (
              <Row className='mb-3'>
                <Form.Group as={Col} md='2' controlId='aq_mphil_country'>
                  {/* Academic Qualification M Phil Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_mphil_country}
                    onChange={(val) => setaq_mphil_country(val)}
                    className='form-control-sm form-control'
                    // {...register("cr_country", {
                    //   required: true,
                    // })}
                    disabled={mphilVal}
                  />
                  {errors.aq_mphil_country && (
                    <p style={{ color: 'red' }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md='2' controlId='mphil_mode'>
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    isInvalid={errors.mphil_mode}
                    disabled={mphilVal}
                    {...register('mphil_mode', {
                      required: 'Please select your mode of educatoin',
                    })}
                  >
                    <option value='' />
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md='2' controlId='mphil_institute'>
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_institute}
                    disabled={mphilVal}
                    placeholder='University/Institute Name'
                    type='text'
                    {...register('mphil_institute', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md='2' controlId='mphil_college'>
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_college}
                    disabled={mphilVal}
                    placeholder='College Name'
                    type='text'
                    {...register('mphil_college', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md='2' controlId='mphil_year'>
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_year}
                    disabled={mphilVal}
                    placeholder='Graduation Year'
                    type='number'
                    {...register('mphil_year', {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='mphil_area'>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_area}
                    disabled={mphilVal}
                    placeholder='Area'
                    type='text'
                    {...register('mphil_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* M Phil Division Details  */}
                <Form.Group as={Col} md='2' controlId='mphil_division'>
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    isInvalid={errors.mphil_division}
                    disabled={mphilVal}
                    {...register('mphil_division', {
                      required: 'Please select your division',
                    })}
                  >
                    <option value='' />
                    <option value='first'>First</option>
                    <option value='second'>Second</option>
                    <option value='third'>Third</option>
                  </Form.Select>
                </Form.Group>
                {/* M Phil Aggregate Percentage  */}
                <Form.Group as={Col} md='2' controlId='mphil_percentage'>
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_percentage}
                    disabled={mphilVal}
                    placeholder='Aggregate Percentage'
                    type='number'
                    {...register('mphil_percentage', {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            );
          })}

        {!mphilVal && (
          <button type='button' onClick={addMPhill} className='add-more-btn'>
            Add
          </button>
        )}
        <hr />

        <p>
          <b>Post Doctoral</b>
          <Form.Check
            type='checkbox'
            label='if Yes?'
            onClick={handlePdoc}
          ></Form.Check>
        </p>
        {!pdocVal &&
          pDoctoral.map(() => {
            return (
              <Row className='mb-3'>
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='aq_post_doctoral_country'
                >
                  {/* Academic Qualification Post Doctoral Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    disabled={pdocVal}
                    value={aq_post_doctoral_country}
                    onChange={(val) => setaq_post_doctoral_country(val)}
                    className='form-control-sm form-control'
                    // {...register("cr_country", {
                    //   required: true,
                    // })}
                  />
                  {errors.post_doctoral_country && (
                    <p style={{ color: 'red' }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_mode'>
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    disabled={pdocVal}
                    isInvalid={errors.post_doctoral_mode}
                    {...register('post_doctoral_mode', {
                      required: 'Please select your mode of education',
                    })}
                  >
                    <option value='' />
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                  {/* <Form.Select
                    isInvalid={errors.mphil_mode}
                    disabled={mphilVal}
                    {...register('mphil_mode', {
                      required: 'Please select your mode of educatoin',
                    })}
                  >
                    <option value='' />
                    <option value='regular'>Regular</option>
                    <option value='part-time'>Part-Time</option>
                    <option value='distance-learning-online'>
                      Distance Learning / Online
                    </option>
                  </Form.Select> */}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_institute'>
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    isInvalid={errors.post_doctoral_institute}
                    placeholder='University/Institute Name'
                    type='text'
                    {...register('post_doctoral_institute', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_college'>
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    isInvalid={errors.post_doctoral_college}
                    placeholder='College Name'
                    type='text'
                    {...register('post_doctoral_college', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_year'>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    placeholder='Graduation Year'
                    type='number'
                    isInvalid={errors.post_doctoral_year}
                    {...register('post_doctoral_year', {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_area'>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    placeholder='Area'
                    type='text'
                    isInvalid={errors.post_doctoral_area}
                    {...register('post_doctoral_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_course'>
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    isInvalid={errors.post_doctoral_course}
                    placeholder='Course Name'
                    type='text'
                    {...register('post_doctoral_course', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md='2' controlId='post_doctoral_division'>
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    disabled={pdocVal}
                    isInvalid={errors.post_doctoral_division}
                    {...register('post_doctoral_division', {
                      required: 'Please select your division',
                    })}
                  >
                    <option value='' />
                    <option value='first'>First</option>
                    <option value='second'>Second</option>
                    <option value='third'>Third</option>
                  </Form.Select>
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md='2'
                  controlId='post_doctoral_percentage'
                >
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    placeholder='Aggregate Percentage'
                    type='number'
                    isInvalid={errors.post_doctoral_percentage}
                    {...register('post_doctoral_percentage', {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                </Form.Group>
              </Row>
            );
          })}
        {!pdocVal && (
          <button type='button' onClick={addPDoctoral} className='add-more-btn'>
            Add
          </button>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartThree;
