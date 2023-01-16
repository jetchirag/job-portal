import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Testing = () => {
  const [cr_country, setcr_Country] = useState("");
  const [cr_region, setcr_Region] = useState("");
  const [native_country, setnative_Country] = useState("");
  const [native_region, setnative_Region] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["cr_country"] = cr_country;
    data["cr_state"] = cr_region;
    data["native_country"] = native_country;
    data["native_state"] = native_region;
    console.log(data);
  };

  return (
    <div className="my-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Application Information</Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Personal Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* First Name Details  */}
                <Form.Group as={Col} md="3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="First Name"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  {errors.firstName && (
                    <p style={{ color: "red" }}>Please enter your first name</p>
                  )}
                </Form.Group>
                {/* Last Name Details  */}
                <Form.Group as={Col} md="3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Last Name"
                    type="text"
                    {...register("lastName", { required: true, maxLength: 20 })}
                  />
                  {errors.lastName && (
                    <p style={{ color: "red" }}>Please enter your last name</p>
                  )}
                </Form.Group>
                {/* Date of Birth Details  */}
                <Form.Group as={Col} md="3" controlId="dob">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    placeholder="DD/MM/YYYY"
                    type="date"
                    {...register("dob", { required: true })}
                  />
                  {errors.dob && (
                    <p style={{ color: "red" }}>Please select your DOB</p>
                  )}
                </Form.Group>
                {/* Gender Details */}
                <Form.Group as={Col} md="3" controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("gender", { required: true })}
                  >
                    <option disabled selected>
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                  {errors.gender && (
                    <p style={{ color: "red" }}>Please select your gender</p>
                  )}
                </Form.Group>
                {/* Mobile Details */}
                <Form.Group as={Col} md="3" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      +91
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Mobile No."
                      type="tel"
                      {...register("mobile", {
                        required: true,
                        minLength: 10,
                        maxLength: 10,
                        // pattern: ((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}
                      })}
                    />
                    {errors.mobile && (
                      <p style={{ color: "red" }}>
                        Please enter your mobile no.
                      </p>
                    )}
                  </InputGroup>
                </Form.Group>
                {/* Email Details */}
                <Form.Group as={Col} md="3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      placeholder="Email ID"
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>Please enter your email id</p>
                    )}
                  </InputGroup>
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Current Residence</b>
              </p>
              <Row className="mb-3">
                {/* Country Details */}
                <Form.Group as={Col} md="3" controlId="cr_country">
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={cr_country}
                    onChange={(val) => setcr_Country(val)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "20px",
                      borderRadius: "5px",
                      width: "200px",
                    }}
                    // {...register("cr_country", {
                    //   required: true,
                    // })}
                  />
                  {errors.cr_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* State Details  */}
                <Form.Group as={Col} md="3" controlId="cr_state">
                  <Form.Label>State</Form.Label>
                  <RegionDropdown
                    country={cr_country}
                    value={cr_region}
                    onChange={(val) => setcr_Region(val)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "20px",
                      borderRadius: "5px",
                      width: "200px",
                    }}
                    // {...register("cr_state", {
                    //   required: true,
                    // })}
                  />
                  {errors.cr_state && (
                    <p style={{ color: "red" }}>Please select your state</p>
                  )}
                </Form.Group>
                {/* City Details  */}
                <Form.Group as={Col} md="3" controlId="cr_city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="City"
                    type="text"
                    // {...register("cr_city", {
                    //   required: true,
                    //   maxLength: 25,
                    // })}
                  />
                  {errors.cr_city && (
                    <p style={{ color: "red" }}>Please enter your city</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Native Place</b>
              </p>
              <Row className="mb-3">
                {/* Country Details */}
                <Form.Group as={Col} md="3" controlId="native_country">
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={native_country}
                    onChange={(val) => setnative_Country(val)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "20px",
                      borderRadius: "5px",
                      width: "200px",
                    }}
                    // {...register("native_country", {
                    //   required: true,
                    // })}
                  />
                  {errors.native_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* State Details  */}
                <Form.Group as={Col} md="3" controlId="native_state">
                  <Form.Label>State</Form.Label>
                  <RegionDropdown
                    country={native_country}
                    value={native_region}
                    onChange={(val) => setnative_Region(val)}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      height: "20px",
                      borderRadius: "5px",
                      width: "200px",
                    }}
                    // {...register("native_state", {
                    //   required: true,
                    // })}
                  />
                  {errors.native_state && (
                    <p style={{ color: "red" }}>Please select your state</p>
                  )}
                </Form.Group>
                {/* City Details  */}
                <Form.Group as={Col} md="3" controlId="native_city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="City"
                    type="text"
                    {...register("native_city", {
                      required: true,
                      maxLength: 25,
                    })}
                  />
                  {errors.native_city && (
                    <p style={{ color: "red" }}>Please enter your city</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <Row className="mb-3">
                {/* Religon  */}
                <Form.Group as={Col} md="3" controlId="religion">
                  <Form.Label>Religion</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("religion", { required: true })}
                  >
                    <option disabled selected>
                      Select
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
                  {errors.religion && (
                    <p style={{ color: "red" }}>Please select your religion</p>
                  )}
                </Form.Group>
                {/* Marrital Status Details  */}
                <Form.Group as={Col} md="3" controlId="marital_status">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("marital_status", { required: true })}
                  >
                    <option disabled selected>
                      Select
                    </option>
                    <option value="single">Single</option>
                    <option value="engaged">Engaged</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                  </Form.Select>
                  {errors.marital_status && (
                    <p style={{ color: "red" }}>
                      Please select your marital status
                    </p>
                  )}
                </Form.Group>
                {/* Aadhaar Card Details  */}
                <Form.Group as={Col} md="3" controlId="aadhaar_card">
                  <Form.Label>Aadhaar Card</Form.Label>
                  <Form.Control
                    placeholder="Aadhaar Card"
                    type="text"
                    {...register("aadhaar_card", {
                      required: true,
                      minLength: 12,
                      maxLength: 12,
                    })}
                  />
                  {errors.aadhaar_card && (
                    <p style={{ color: "red" }}>
                      Please enter your aadhaar card number
                    </p>
                  )}
                </Form.Group>
                {/* PAN Card Details  */}
                <Form.Group as={Col} md="3" controlId="pan_card">
                  <Form.Label>PAN Card</Form.Label>
                  <Form.Control
                    placeholder="PAN Card"
                    type="text"
                    {...register("pan_card", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors.pan_card && (
                    <p style={{ color: "red" }}>
                      Please enter your pan card number
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Testing;
