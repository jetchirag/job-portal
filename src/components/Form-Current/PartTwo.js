import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useFormContext } from 'react-hook-form';

const PartTwo = () => {
  const [countries, setCountries] = useState(['']);
  const [selectcrcountry, setSelectcrcountry] = useState();
  const [new_cr_states, setCRStates] = useState(['']);
  const [new_cr_city, setCRCity] = useState(['']);

  const [selectnativecountry, setSelectntcountry] = useState();
  const [new_nt_states, setNTStates] = useState(['']);
  const [new_nt_city, setNTCity] = useState(['']);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const crcountryhandler = async (e) => {
    setSelectcrcountry(e.target.value);
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${e.target.value}/states`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // sort alphabetically
        result.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCRStates(result)
      })
      
      .catch((error) => console.log('error', error));
  };

  const ntcountryhandler = async (e) => {
    setSelectntcountry(e.target.value);
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${e.target.value}/states`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // sort alphabetically
        result.sort((a, b) => (a.name > b.name ? 1 : -1));
        setNTStates(result)
      })
      .catch((error) => console.log('error', error));
  };

  const crcityhandler = async (e) => {
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${selectcrcountry}/states/${e.target.value}/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // sort alphabetically
        result.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCRCity(result)
      })
      .catch((error) => console.log('error', error));
  };

  const ntcityhandler = async (e) => {
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${selectnativecountry}/states/${e.target.value}/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // sort alphabetically
        result.sort((a, b) => (a.name > b.name ? 1 : -1));
        setNTCity(result)
      })
      .catch((error) => console.log('error', error));
  };
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

  useEffect(() => {
    const getCountries = async () => {
      await fetch(
        'https://api.countrystatecity.in/v1/countries',
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          // move india to first
          const index = result.findIndex((x) => x.name === 'India');
          const india = result.splice(index, 1);
          result.unshift(india[0]);

          setCountries(result);
        })
        .catch((error) => console.log('error', error));
    };
    getCountries();
  }, []);
  return (
    <Accordion.Item eventKey='1'>
      <Accordion.Header>2. Personal Information</Accordion.Header>
      <Accordion.Body>
        <Row className='mb-3'>
          {/* First Name Details  */}
          <Form.Group as={Col} md='2' controlId='firstName'>
            <Form.Label>
              First Name
              <span style={{ color: 'red', fontSize: '10px' }}>
                {' '}
                as per Aadhaar
              </span>
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.firstName}
              size='sm'
              placeholder='First Name'
              type='text'
              {...register('firstName', {
                required: true,
                maxLength: 20,
              })}
            />
          </Form.Group>
          {/* Middle Name Details  */}
          <Form.Group as={Col} md='2' controlId='middleName'>
            <Form.Label>
              Middle Name
              <span style={{ color: 'red', fontSize: '10px' }}>
                {' '}
                as per Aadhaar
              </span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.middleName}
              size='sm'
              placeholder='Middle Name'
              type='text'
              {...register('middleName', {
                required: false,
                maxLength: 20,
              })}
            />
          </Form.Group>
          {/* Last Name Details  */}
          <Form.Group as={Col} md='2' controlId='lastName'>
            <Form.Label>
              Last Name
              <span style={{ color: 'red', fontSize: '10px' }}>
                {' '}
                as per Aadhaar
              </span>
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.lastName}
              size='sm'
              placeholder='Last Name'
              type='text'
              {...register('lastName', { required: true, maxLength: 20 })}
            />
          </Form.Group>
          {/* Date of Birth Details  */}
          <Form.Group as={Col} md='2' controlId='dob'>
            <Form.Label>
              Date of Birth<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.dob}
              size='sm'
              min='1970-01-01'
              max='2010-12-31'
              placeholder='DD/MM/YYYY'
              type='date'
              {...register('dob', { required: true })}
            />
          </Form.Group>
          {/* Gender Details */}
          <Form.Group as={Col} md='2' controlId='gender'>
            <Form.Label>
              Gender<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.gender}
              size='sm'
              {...register('gender', {
                required: 'Please select your gender',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='female'>Transgender</option>
            </Form.Select>
          </Form.Group>
          {/* Mobile Details */}
          <Form.Group as={Col} md='2' controlId='mobile'>
            <Form.Label>
              Mobile<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id='inputGroupPrepend'>+91</InputGroup.Text>
              <Form.Control
                isInvalid={errors.mobile}
                size='sm'
                className='small'
                placeholder='Mobile No.'
                type='tel'
                {...register('mobile', {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                  // pattern: ((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}
                })}
              />
              <br />
            </InputGroup>
          </Form.Group>
          {/* Email Details */}
          <Form.Group as={Col} md='2' controlId='email'>
            <Form.Label>
              Email<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
              <Form.Control
                isInvalid={errors.email}
                size='sm'
                placeholder='Email ID'
                type='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <br />
            </InputGroup>
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Current Residence</b>
        </p>
        <Row className='mb-3'>
          {/* Country Details */}
          <Form.Group as={Col} md='2' controlId='cr_country'>
            <Form.Label>
              Country<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.cr_country}
              size='sm'
              {...register('cr_country', {
                required: true,
              })}
              onChange={crcountryhandler}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* State Details  */}
          <Form.Group as={Col} md='2' controlId='cr_state'>
            <Form.Label>
              State<span style={{ color: 'red' }}> *</span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.cr_states}
              size='sm'
              {...register('cr_states', {
                required: true,
              })}
              onChange={crcityhandler}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {new_cr_states?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md='2' controlId='cr_city'>
            <Form.Label>
              City<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.cr_city}
              size='sm'
              {...register('cr_city', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {new_cr_city?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md='2' controlId='address'>
            <Form.Label>
              Address<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              as={'textarea'}
              isInvalid={errors.cr_address}
              size='sm'
              placeholder='Full Address'
              type='text'
              {...register('cr_address', {
                required: true,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Native Place</b>
        </p>
        <Row className='mb-3'>
          {/* Country Details */}

          <Form.Group as={Col} md='2' controlId='native_country'>
            <Form.Label>
              Country<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.native_country}
              size='sm'
              {...register('native_country', {
                required: true,
              })}
              onChange={ntcountryhandler}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>

          {/* State Details  */}
          <Form.Group as={Col} md='2' controlId='native_state'>
            <Form.Label>
              State<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.native_state}
              size='sm'
              {...register('native_state', {
                required: true,
              })}
              onChange={ntcityhandler}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {new_nt_states?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md='2' controlId='native_city'>
            <Form.Label>
              City<span style={{ color: 'red' }}> *</span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.native_city}
              size='sm'
              {...register('native_city', {
                required: true,
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              {new_nt_city?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md='2' controlId='address'>
            <Form.Label>
              Address<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control
              as={'textarea'}
              isInvalid={errors.native_address}
              size='sm'
              placeholder='Full Address'
              type='text'
              {...register('native_address', {
                required: true,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
        <Row className='mb-3'>
          {/* Religon  */}
          <Form.Group as={Col} md='2' controlId='religion'>
            <Form.Label>
              Religion<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.religion}
              size='sm'
              aria-label='Default select example'
              {...register('religion', {
                required: 'Please select your religion',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='buddh'>Buddhism</option>
              <option value='christian'>Christian</option>
              <option value='hindu'>Hinduism</option>
              <option value='islam'>Islam</option>
              <option value='jain'>Jain</option>
              <option value='sikh'>Sikh</option>
              <option value='zoroastrian'>Zoroastrian</option>
              <option value='other'>Other</option>
            </Form.Select>
          </Form.Group>
          {/* Marrital Status Details  */}
          <Form.Group as={Col} md='2' controlId='marital_status'>
            <Form.Label>
              Marital Status<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.marital_status}
              size='sm'
              aria-label='Default select example'
              {...register('marital_status', {
                required: 'Please select your marital status',
              })}
            >
              <option selected='' disabled='' value=''>
                Choose...
              </option>
              <option value='single'>Single</option>
              <option value='engaged'>Engaged</option>
              <option value='married'>Married</option>
              <option value='divorced'>Divorced</option>
            </Form.Select>
          </Form.Group>
          {/* Aadhaar Card Details  */}
          <Form.Group as={Col} md='2' controlId='aadhaar_card'>
            <Form.Label>
              Aadhaar Card
            </Form.Label>
            <Form.Control
              isInvalid={errors.aadhaar_card}
              size='sm'
              placeholder='Aadhaar Card'
              type='text'
              {...register('aadhaar_card', {
                required: false,
                minLength: 12,
                maxLength: 12,
              })}
            />
          </Form.Group>
          {/* PAN Card Details  */}
          <Form.Group as={Col} md='2' controlId='pan_card'>
            <Form.Label>
              PAN Card
            </Form.Label>
            <Form.Control
              isInvalid={errors.pan_card}
              size='sm'
              placeholder='PAN Card'
              type='text'
              {...register('pan_card', {
                required: false,
                minLength: 10,
                maxLength: 10,
              })}
            />
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartTwo;
