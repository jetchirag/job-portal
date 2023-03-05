import React, { useEffect, useState } from 'react';
import { set, useFormContext } from 'react-hook-form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const PartThree = () => {
  var headers = new Headers();
  headers.append(
    'X-CSCAPI-KEY',
    'ZVZzdnMxQkhYVW96MHlLYlhoaVBTWXpMVXBCR0I4NVVxWXBQTEZwaw=='
  );
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };
  const [countries, setCountries] = useState(['']);
  useEffect(() => {
    const getCountries = async () => {
      await fetch(
        'https://api.countrystatecity.in/v1/countries',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setCountries(result);
        })
        .catch((error) => console.log('error', error));
    };
    getCountries();
  }, []);
  const [mphilVal, setMphil] = useState(true);
  const handleMphil = () => {
    setMphil(!mphilVal);
  };
  const [pdocVal, setPdoc] = useState(true);
  const handlePdoc = () => {
    setPdoc(!pdocVal);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [graduate, setGraduate] = useState(['set']);
  const [postGraduate, setPostGraduate] = useState(['set']);
  const [mPhill, setMPhill] = useState(['set']);
  const [phD, setPhD] = useState(['set']);
  const [pDoctoral, setpDoctoral] = useState(['set']);
  const [years, setYears] = useState([]);
  useEffect(() => {
    let c = [];
    for (let i = 1975; i <= 2023; i++) {
      c = [...c, i];
    }

    setYears(c);
  }, []);
  const addGrad = () => {
    setGraduate([...graduate, 'set']);
  };
  const removeGrad = () => {
    const copyArr = [...graduate];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setGraduate(copyArr);
  };
  const addPostGrad = () => {
    setPostGraduate([...postGraduate, 'set']);
  };
  const removePostGrad = () => {
    const copyArr = [...postGraduate];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setPostGraduate(copyArr);
  };
  const addMPhill = () => {
    setMPhill([...mPhill, 'set']);
  };
  const removeMPHill = () => {
    const copyArr = [...mPhill];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setMPhill(copyArr);
  };
  const addPhD = () => {
    setPhD([...phD, 'set']);
  };
  const removePhD = () => {
    const copyArr = [...phD];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setPhD(copyArr);
  };
  const addPDoctoral = () => {
    setpDoctoral([...pDoctoral, 'set']);
  };
  const removePostDoc = () => {
    const copyArr = [...pDoctoral];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setpDoctoral(copyArr);
  };
  return (
    <Accordion.Item eventKey='2'>
      <Accordion.Header>
        3. Academic / Professional Qualificaiton
      </Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Seconday / Class 10th</b>
        </p>
        <Row className='mb-3'>
          {/* Country Details */}

          <Form.Group as={Col} md='2' controlId='aq_secondary_country'>
            <Form.Label>
              Country<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.aq_secondary_country}
              size='sm'
              {...register('aq_secondary_country', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          {/* Academic Qulalification Secondary Country  */}
          {/* Academic Qualification Education Mode Details  */}
          <Form.Group as={Col} md='2' controlId='secondary_mode'>
            <Form.Label>
              Education Mode<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.secondary_mode}
              size='sm'
              {...register('secondary_mode', {
                required: 'Please select your mode of educatoin',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              secondary_mode
              <option value='regular'>Regular</option>
              <option value='part-time'>Part-Time</option>
              <option value='distance-learning-online'>
                Distance Learning / Online
              </option>
            </Form.Select>
          </Form.Group>
          {/* School  */}
          <Form.Group as={Col} md='2' controlId='secondary_school'>
            <Form.Label>
              School<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.secondary_school}
              size='sm'
              placeholder='School Name'
              type='text'
              {...register('secondary_school', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Board  */}
          <Form.Group as={Col} md='2' controlId='secondary_board'>
            <Form.Label>
              Board<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.secondary_board}
              size='sm'
              placeholder='Board Name'
              type='text'
              {...register('secondary_board', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Passing Year  */}
          {/* <Form.Group as={Col} md="2" controlId="secondary_passingYear">
            <Form.Label>
              Passing Year<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.secondary_passingYear}
              size="sm"
              placeholder="Passing Year"
              type="number"
              {...register("secondary_passingYear", {
                required: true,
                maxLength: 4,
                minLength: 4,
              })}
            />
          </Form.Group> */}
          <Form.Group as={Col} md='2' controlId='secondary_passingYear'>
            <Form.Label>
              Passing Year<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.secondary_passingYear}
              size='sm'
              {...register('secondary_passingYear', {
                required: 'Please select your division',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>

              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* Division Details  */}
          <Form.Group as={Col} md='2' controlId='secondary_division'>
            <Form.Label>
              Division<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.secondary_division}
              size='sm'
              {...register('secondary_division', {
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
          <Form.Group as={Col} md='2' controlId='secondary_percentage'>
            <Form.Label>
              Aggregate Percentage<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.secondary_percentage}
              size='sm'
              placeholder='Aggregate Percentage'
              type='number'
              step='.01'
              {...register('secondary_percentage', {
                required: true,
                minValue: 0,
                maxValue: 100,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
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
            <Form.Select
              isInvalid={errors.aq_higher_secondary_country}
              size='sm'
              {...register('aq_higher_secondary_country', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
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

          <Form.Group as={Col} md='2'>
            <Form.Label>
              School<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.school}
              size='sm'
              placeholder='School Name'
              type='text'
              {...register('higher_secondary_school', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Board  */}

          <Form.Group as={Col} md='2' controlId='higher_secondary_board'>
            <Form.Label>
              Board<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.higher_secondary_board}
              size='sm'
              placeholder='Board Name'
              type='text'
              {...register('higher_secondary_board', {
                required: true,
                maxLength: 50,
              })}
            />
          </Form.Group>
          {/* Stream Details (Newly Added)  */}
          <Form.Group as={Col} md='2' controlId='higher_secondary_stream'>
            <Form.Label>
              Stream<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.higher_secondary_stream}
              size='sm'
              {...register('higher_secondary_stream', {
                required: 'Please select your stream',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='science'>Science</option>
              <option value='commerce'>Commerce</option>
              <option value='humanities-arts'>Humanities / Arts</option>
            </Form.Select>
          </Form.Group>
          {/* Passing Year  */}

          <Form.Group as={Col} md='2' controlId='higher_secondary_passingYear'>
            <Form.Label>
              Passing Year<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.higher_secondary_passingYear}
              size='sm'
              {...register('higher_secondary_passingYear', {
                required: 'Please select passing year',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>

              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* Division Details  */}

          <Form.Group as={Col} md='2' controlId='higher_secondary_division'>
            <Form.Label>
              Division<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.higher_secondary_division}
              size='sm'
              {...register('higher_secondary_division', {
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

          <Form.Group as={Col} md='2' controlId='higher_secondary_percentage'>
            <Form.Label>
              Aggregate Percentage<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.higher_secondary_percentage}
              size='sm'
              placeholder='Aggregate Percentage'
              type='number'
              step='.01'
              {...register('higher_secondary_percentage', {
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

                  <Form.Select
                    isInvalid={errors.aq_graduation_country}
                    size='sm'
                    {...register('aq_graduation_country', {
                      required: true,
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
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
                    <option value='manipal-online'>Manipal Online</option>
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
                  <Form.Select
                    isInvalid={errors.graduation_year}
                    size='sm'
                    {...register('graduation_year', {
                      required: 'Please select graduation year',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {years.map((year) => {
                      return <option value={year}>{year}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_course'>
                  <Form.Label>
                    Course Name<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.graduation_course}
                    size='sm'
                    {...register('graduation_course', {
                      required: 'Please select your course name',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>

                    <option value='btech'>B.Tech</option>
                    <option value='be'>B.E</option>
                    <option value='bsc'>B.Sc</option>
                    <option value='ba'>B.A</option>
                    <option value='barch'>B.Arch</option>
                    <option value='bba'>
                      BBA- Bachelor of Business Administration
                    </option>
                    <option value='bbs'>
                      BBS- Bachelor of Business Studies
                    </option>
                    <option value='bcom'>BCom- Bachelor of Commerce</option>
                    <option value='bem'>
                      BEM- Bachelor of Event Management
                    </option>
                    <option value='bfa'>BFA- Bachelor of Fine Arts</option>
                    <option value='bfd'>
                      BFD- Bachelor of Fashion Designing
                    </option>
                    <option value='bjmc'>
                      BJMC- Bachelor of Journalism and Mass Communication
                    </option>
                    <option value='bms'>
                      BMS- Bachelor of Management Science
                    </option>
                    <option value='bsw'>BSW- Bachelor of Social Work</option>
                    <option value='bttm'>
                      BTTM- Bachelor of Travel and Tourism Management
                    </option>
                    <option value='llb'>LLB</option>
                    <option value='bod'>Bachelor of Design</option>
                    <option value='other'>Others</option>
                  </Form.Select>
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='graduation_area'>
                  <Form.Label>
                    Specialization<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.graduation_area}
                    size='sm'
                    placeholder='Specialization'
                    type='text'
                    {...register('graduation_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                {/* <Form.Group as={Col} md="2" controlId="graduation_course">
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
                </Form.Group> */}
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
                    step='.01'
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
        <button
          type='button'
          onClick={addGrad}
          className='btn btn-outline-success'
        >
          Add New
        </button>{' '}
        <button
          type='button'
          onClick={removeGrad}
          className='btn btn-outline-danger'
        >
          Remove Last
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

                  <Form.Select
                    isInvalid={errors.aq_post_graduation_country}
                    size='sm'
                    {...register('aq_post_graduation_country}', {
                      required: true,
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}

                <Form.Group as={Col} md='2' controlId='post_graduation_mode'>
                  <Form.Label>
                    Education Mode<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_graduation_mode}
                    size='sm'
                    {...register('post_graduation_mode', {
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
                    <option value='online-manipal'>Online Manipal</option>
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
                    className='small'
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
                  <Form.Select
                    isInvalid={errors.post_graduation_year}
                    size='sm'
                    {...register('post_graduation_year', {
                      required: 'Please select graduation year',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {years.map((year) => {
                      return <option value={year}>{year}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_course'>
                  <Form.Label>
                    Course<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_graduation_course}
                    size='sm'
                    {...register('post_graduation_course', {
                      required: 'Please select your course',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    <option value='ma'>MA</option>
                    <option value='msc'>MSc</option>
                    <option value='mres'>MRes</option>
                    <option value='mphil'>MPhil</option>
                    <option value='mfa'>MFA</option>
                    <option value='march'>M.Arch</option>
                    <option value='mlitt'>MLitt</option>
                    <option value='ms'>M.S (by research)</option>
                    <option value='llm'>LLM</option>
                    <option value='lpc'>LPC</option>
                    <option value='gdl'>GDL</option>
                    <option value='mba'>MBA</option>
                    <option value='mcom'>MCom</option>
                    <option value='mim'>MIM</option>
                    <option value='me'>ME</option>
                    <option value='mtech'>MTech</option>
                    <option value='msw'>MSW</option>
                    <option value='pgcert'>PGCert</option>
                    <option value='pgdip'>PGDip</option>
                    <option value='pgce'>PGCE</option>
                    <option value='pgde'>PGDE</option>
                    <option value='other'>Others</option>
                  </Form.Select>
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md='2' controlId='post_graduation_area'>
                  <Form.Label>
                    Specialization<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.post_graduation_area}
                    size='sm'
                    placeholder='Specialization'
                    type='text'
                    {...register('post_graduation_area', {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                </Form.Group>
                {/* Course Details  */}
                {/* <Form.Group as={Col} md="2" controlId="post_graduation_course">
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
                </Form.Group> */}

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
                    step='.01'
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
        <button
          type='button'
          onClick={addPostGrad}
          className='btn btn-outline-success'
        >
          Add New
        </button>{' '}
        <button
          type='button'
          onClick={removePostGrad}
          className='btn btn-outline-danger'
        >
          Remove Last
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

                <Form.Select
                  isInvalid={errors.aq_phd_country}
                  size='sm'
                  {...register('aq_phd_country', {
                    required: true,
                  })}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  {countries?.map((element) => {
                    return <option value={element.iso2}>{element.name}</option>;
                  })}
                </Form.Select>
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
                  <option value='online-manipal'>Online Manipal</option>
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
                <Form.Select
                  isInvalid={errors.post_graduation_year}
                  size='sm'
                  {...register('phd_year', {
                    required: 'Please select completion year',
                  })}
                >
                  <option selected='' disabled='' value=''>
                    Choose...
                  </option>
                  {years.map((year) => {
                    return <option value={year}>{year}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              {/* Area Details  */}
              <Form.Group as={Col} md='2' controlId='phd_area'>
                <Form.Label>
                  Specialization<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.phd_area}
                  size='sm'
                  placeholder='Specialization'
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
        <button
          type='button'
          onClick={addPhD}
          className='btn btn-outline-success'
        >
          Add New
        </button>{' '}
        <button
          type='button'
          onClick={removePhD}
          className='btn btn-outline-danger'
        >
          Remove Last
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

                  <Form.Select
                    isInvalid={errors.aq_mphil_country}
                    size='sm'
                    {...register('aq_mphil_country', {
                      required: true,
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
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
                  <Form.Label>
                    Completion Year<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.mphilVal}
                    size='sm'
                    {...register('mphil_year', {
                      required: 'Please select completion year',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {years.map((year) => {
                      return <option value={year}>{year}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Area Details  */}

                <Form.Group as={Col} md='2' controlId='mphil_area'>
                  <Form.Label>Specialization</Form.Label>
                  <Form.Control
                    isInvalid={errors.mphil_area}
                    disabled={mphilVal}
                    placeholder='Specialization'
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
                    step='.01'
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
          <>
            <button
              type='button'
              onClick={addMPhill}
              className='btn btn-outline-success'
            >
              Add New
            </button>{' '}
            <button
              type='button'
              onClick={removeMPHill}
              className='btn btn-outline-danger'
            >
              Remove Last
            </button>
          </>
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

                  <Form.Select
                    isInvalid={errors.aq_post_doctoral_country}
                    size='sm'
                    {...register('aq_post_doctoral_country', {
                      required: true,
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {countries?.map((element) => {
                      return (
                        <option value={element.iso2}>{element.name}</option>
                      );
                    })}
                  </Form.Select>
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
                  <Form.Label>
                    Graduation Year<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Select
                    isInvalid={errors.post_doctoral_year}
                    size='sm'
                    {...register('post_doctoral_year', {
                      required: 'Please select graduation year',
                    })}
                  >
                    <option selected='' disabled='' value=''>
                      Choose...
                    </option>
                    {years.map((year) => {
                      return <option value={year}>{year}</option>;
                    })}
                  </Form.Select>
                </Form.Group>
                {/* Area Details  */}

                <Form.Group as={Col} md='2' controlId='post_doctoral_area'>
                  <Form.Label>Specialization</Form.Label>
                  <Form.Control
                    disabled={pdocVal}
                    placeholder='Specialization'
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
                    step='.01'
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
          <>
            <button
              type='button'
              onClick={addPDoctoral}
              className='btn btn-outline-success'
            >
              Add New
            </button>{' '}
            <button
              type='button'
              onClick={removePostDoc}
              className='btn btn-outline-danger'
            >
              Remove Last
            </button>
          </>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartThree;
