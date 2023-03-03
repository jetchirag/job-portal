import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormContext } from "react-hook-form";

const PartTwoDetail = (props) => {
  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "ZVZzdnMxQkhYVW96MHlLYlhoaVBTWXpMVXBCR0I4NVVxWXBQTEZwaw=="
  );
  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const [countries, setCountries] = useState([""]);
  const [selectcrcountry, setSelectcrcountry] = useState();
  const [new_cr_states, setCRStates] = useState([""]);
  const [new_cr_city, setCRCity] = useState([""]);

  const [selectnativecountry, setSelectntcountry] = useState();
  const [new_nt_states, setNTStates] = useState([""]);
  const [new_nt_city, setNTCity] = useState([""]);

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
      .then((result) => setCRStates(result))
      .catch((error) => console.log("error", error));
  };

  const ntcountryhandler = async (e) => {
    setSelectntcountry(e.target.value);
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${e.target.value}/states`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setNTStates(result))
      .catch((error) => console.log("error", error));
  };

  const crcityhandler = async (e) => {
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${selectcrcountry}/states/${e.target.value}/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCRCity(result))
      .catch((error) => console.log("error", error));
  };

  const ntcityhandler = async (e) => {
    await fetch(
      `https://api.countrystatecity.in/v1/countries/${selectnativecountry}/states/${e.target.value}/cities`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setNTCity(result))
      .catch((error) => console.log("error", error));
  };


  useEffect(() => {
    const getCountries = async () => {
      await fetch(
        "https://api.countrystatecity.in/v1/countries",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setCountries(result);
        })
        .catch((error) => console.log("error", error));
    };
    getCountries();
  }, [requestOptions]);
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>2. Personal Information</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          {/* First Name Details  */}
          <Form.Group as={Col} md="2" controlId="firstName">
            <Form.Label>
              First Name
              <span style={{ color: "grey", fontSize: "10px" }}>
                {" "}
                as per Aadhaar
              </span>
              <span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Control
              size="sm"
              placeholder="First Name"
              type="text"
              value={props?.data?.applicant?.firstName}
            />
          </Form.Group>
          {/* Last Name Details  */}
          <Form.Group as={Col} md="2" controlId="lastName">
            <Form.Label>
              Last Name
              <span style={{ color: "grey", fontSize: "10px" }}>
                {" "}
                as per Aadhaar
              </span>
              <span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Control
              size="sm"
              placeholder="Last Name"
              type="text"
              value={props?.data?.applicant?.lastName}
            />
          </Form.Group>
          {/* Date of Birth Details  */}
          <Form.Group as={Col} md="2" controlId="dob">
            <Form.Label>
              Date of Birth<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Control
              size="sm"
              // placeholder={props.data.applicant.dob}
              type="date"
              // value={new Date(props?.data?.applicant?.dob)}
            />
          </Form.Group>
          {/* Gender Details */}
          <Form.Group as={Col} md="2" controlId="gender">
            <Form.Label>
              Gender<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Select size="sm" value={props.data?.applicant?.gender}>
              <option disabled="" value="">
                Choose...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          {/* Mobile Details */}
          <Form.Group as={Col} md="2" controlId="mobile">
            <Form.Label>
              Mobile<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                size="sm"
                placeholder="Mobile No."
                type="tel"
                value={props?.data?.applicant?.mobile}
              />
              <br />
            </InputGroup>
          </Form.Group>
          {/* Email Details */}
          <Form.Group as={Col} md="2" controlId="email">
            <Form.Label>
              Email<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                size="sm"
                placeholder="Email ID"
                type="email"
                value={props.data?.applicant?.email}
              />
              <br />
            </InputGroup>
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Current Residence</b>
        </p>
        <Row className="mb-3">
          {/* Country Details */}
          <Form.Group as={Col} md="2" controlId="cr_country">
            <Form.Label>
              Country<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.cr_country}
              size="sm"
              {...register("cr_country", {
                required: true,
              })}
              onChange={crcountryhandler}
              value={props?.data?.cr_country}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* State Details  */}
          <Form.Group as={Col} md="2" controlId="cr_state">
            <Form.Label>
              State<span style={{ color: "red" }}> *</span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.cr_states}
              size="sm"
              {...register("cr_states", {
                required: true,
              })}
              onChange={crcityhandler}
              value={props?.data?.cr_state}
            >
              <option selected="" disabled="" value="">
                {props?.data?.cr_state}
              </option>
              {new_cr_states?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md="2" controlId="cr_city">
            <Form.Label>
              City<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.cr_city}
              size="sm"
              {...register("cr_city", {
                required: true,
              })}
              value={props?.data?.cr_city}
            >
              <option selected="" disabled="" value="">
                {props?.data?.cr_city}
              </option>
              {new_cr_city?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="address">
            <Form.Label>
              Address<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
            as={"textarea"}
              isInvalid={errors.cr_address}
              size="sm"
              placeholder="Full Address"
              type="text"
              {...register("cr_address", {
                required: true,
              
              })}
              defaultValue={props?.data?.cr_address}
            />
          </Form.Group>
        </Row>
        <hr />
        <p>
          <b>Native Place</b>
        </p>
        <Row className="mb-3">
          {/* Country Details */}
          <Form.Group as={Col} md="2" controlId="native_country">
            <Form.Label>
              Country<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.native_country}
              size="sm"
              {...register("native_country", {
                required: true,
              })}
              onChange={ntcountryhandler}
              
            >
              <option selected="" disabled="" value="">
              {props?.data?.native_country}
              </option>
              {countries?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* State Details  */}
          <Form.Group as={Col} md="2" controlId="native_state">
            <Form.Label>
              State<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.native_state}
              size="sm"
              {...register("native_states", {
                required: true,
              })}
              onChange={ntcityhandler}
            >
              <option selected="" disabled="" value="">
              {props?.data?.native_state}
              </option>
              {new_nt_states?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md="2" controlId="native_city">
            <Form.Label>
              City<span style={{ color: "red" }}> *</span>
            </Form.Label>

            <Form.Select
              isInvalid={errors.native_city}
              size="sm"
              {...register("native_city", {
                required: true,
              })}
            >
              <option selected="" disabled="" value="">
              {props?.data?.native_city}
              </option>
              {new_nt_city?.map((element) => {
                return <option value={element.iso2}>{element.name}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="address">
            <Form.Label>
              Address<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
            as={"textarea"}
              isInvalid={errors.native_address}
              size="sm"
              placeholder="Full Address"
              type="text"
              {...register("native_address", {
                required: true,
              
              })}
              defaultValue={props?.data?.native_address}
            />
          </Form.Group>
        </Row>
        <hr />
        <Row className="mb-3">
          {/* Religon  */}
          <Form.Group as={Col} md="2" controlId="religion">
            <Form.Label>
              Religion<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Select
              size="sm"
              aria-label="Default select example"
              value={props?.data?.applicant?.religion}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="buddh">Buddh</option>
              <option value="christian">Christian</option>
              <option value="hindu">Hindu</option>
              <option value="islam">Islam</option>
              <option value="jain">Jain</option>
              <option value="sikh">Sikh</option>
              <option value="zoroastrian">Zoroastrian</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
          {/* Marrital Status Details  */}
          <Form.Group as={Col} md="2" controlId="marital_status">
            <Form.Label>
              Marital Status<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Select
              size="sm"
              aria-label="Default select example"
              value={props?.data?.applicant?.marital_status}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="single">Single</option>
              <option value="engaged">Engaged</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </Form.Select>
          </Form.Group>
          {/* Aadhaar Card Details  */}
          <Form.Group as={Col} md="2" controlId="aadhaar_card">
            <Form.Label>
              Aadhaar Card<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Control
              size="sm"
              placeholder="Aadhaar Card"
              type="text"
              value={props?.data?.aadhaar_card}
            />
          </Form.Group>
          {/* PAN Card Details  */}
          <Form.Group as={Col} md="2" controlId="pan_card">
            <Form.Label>
              PAN Card<span style={{ color: "grey" }}> *</span>
            </Form.Label>
            <Form.Control
              size="sm"
              placeholder="PAN Card"
              type="text"
              value={props?.data?.pan_card}
            />
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartTwoDetail;
