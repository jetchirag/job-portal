import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormContext } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const PartTwo = () => {
  const [cr_country, setcr_Country] = useState("");
  const [cr_region, setcr_Region] = useState("");
  const [native_country, setnative_Country] = useState("");
  const [native_region, setnative_Region] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>2. Personal Information</Accordion.Header>
      <Accordion.Body>
        <Row className="mb-3">
          {/* First Name Details  */}
          <Form.Group as={Col} md="2" controlId="firstName">
            <Form.Label>
              First Name
              <span style={{ color: "red", fontSize: "10px" }}>
                {" "}
                as per Aadhaar
              </span>
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.firstName}
              size="sm"
              placeholder="First Name"
              type="text"
              {...register("firstName", {
                required: true,
                maxLength: 20,
              })}
            />
          </Form.Group>
          {/* Last Name Details  */}
          <Form.Group as={Col} md="2" controlId="lastName">
            <Form.Label>
              Last Name
              <span style={{ color: "red", fontSize: "10px" }}>
                {" "}
                as per Aadhaar
              </span>
              <span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.lastName}
              size="sm"
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true, maxLength: 20 })}
            />
          </Form.Group>
          {/* Date of Birth Details  */}
          <Form.Group as={Col} md="2" controlId="dob">
            <Form.Label>
              Date of Birth<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.dob}
              size="sm"
              placeholder="DD/MM/YYYY"
              type="date"
              {...register("dob", { required: true })}
            />
          </Form.Group>
          {/* Gender Details */}
          <Form.Group as={Col} md="2" controlId="gender">
            <Form.Label>
              Gender<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.gender}
              size="sm"
              {...register("gender", {
                required: "Please select your gender",
              })}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          {/* Mobile Details */}
          <Form.Group as={Col} md="2" controlId="mobile">
            <Form.Label>
              Mobile<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                isInvalid={errors.mobile}
                size="sm"
                placeholder="Mobile No."
                type="tel"
                {...register("mobile", {
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
          <Form.Group as={Col} md="2" controlId="email">
            <Form.Label>
              Email<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                isInvalid={errors.email}
                size="sm"
                placeholder="Email ID"
                type="email"
                {...register("email", {
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
        <Row className="mb-3">
          {/* Country Details */}
          <Form.Group as={Col} md="2" controlId="cr_country">
            <Form.Label>
              Country<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <CountryDropdown
              className="hi form-control form-control-sm"
              isInvalid={errors.cr_country}
              value={cr_country}
              onChange={(val) => setcr_Country(val)}
              // {...register("cr_country", {
              //   required: true,
              // })}
            />
          </Form.Group>
          {/* State Details  */}
          <Form.Group as={Col} md="2" controlId="cr_state">
            <Form.Label>
              State<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <RegionDropdown
              country={cr_country}
              value={cr_region}
              onChange={(val) => setcr_Region(val)}
              className={"form-control  form-control-sm"}
              // {...register("cr_state", {
              //   required: true,
              // })}
            />
            {errors.cr_state && (
              <p style={{ color: "red" }}>Please select your state</p>
            )}
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md="2" controlId="cr_city">
            <Form.Label>
              City<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.cr_city}
              placeholder="City"
              size="sm"
              type="text"
              {...register("cr_city", {
                required: true,
                maxLength: 25,
              })}
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
            <CountryDropdown
              value={native_country}
              onChange={(val) => setnative_Country(val)}
              className={"form-control form-control-sm"}
              // {...register("native_country", {
              //   required: true,
              // })}
            />
          </Form.Group>
          {/* State Details  */}
          <Form.Group as={Col} md="2" controlId="native_state">
            <Form.Label>
              State<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <RegionDropdown
              country={native_country}
              value={native_region}
              onChange={(val) => setnative_Region(val)}
              className={"form-control form-control-sm"}
              // {...register("native_state", {
              //   required: true,
              // })}
            />
          </Form.Group>
          {/* City Details  */}
          <Form.Group as={Col} md="2" controlId="native_city">
            <Form.Label>
              City<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.native_city}
              size="sm"
              placeholder="City"
              type="text"
              {...register("native_city", {
                required: true,
                maxLength: 25,
              })}
            />
          </Form.Group>
        </Row>
        <hr />
        <Row className="mb-3">
          {/* Religon  */}
          <Form.Group as={Col} md="2" controlId="religion">
            <Form.Label>
              Religion<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.religion}
              size="sm"
              aria-label="Default select example"
              {...register("religion", {
                required: "Please select your religion",
              })}
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
              Marital Status<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Select
              isInvalid={errors.marital_status}
              size="sm"
              aria-label="Default select example"
              {...register("marital_status", {
                required: "Please select your marital status",
              })}
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
              Aadhaar Card<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.aadhaar_card}
              size="sm"
              placeholder="Aadhaar Card"
              type="text"
              {...register("aadhaar_card", {
                required: true,
                minLength: 12,
                maxLength: 12,
              })}
            />
          </Form.Group>
          {/* PAN Card Details  */}
          <Form.Group as={Col} md="2" controlId="pan_card">
            <Form.Label>
              PAN Card<span style={{ color: "red" }}> *</span>
            </Form.Label>
            <Form.Control
              isInvalid={errors.pan_card}
              size="sm"
              placeholder="PAN Card"
              type="text"
              {...register("pan_card", {
                required: true,
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
