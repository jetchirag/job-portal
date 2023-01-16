import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from "react-hook-form";
import { facultiesList, list } from "../components/Form/faculties (1)";
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
  const [aq_higher_secondary_country, setaq_higher_secondary_country] =
    useState("");
  const [aq_graduation_country, setaq_graduation_country] = useState("");
  const [aq_post_graduation_country, setaq_post_graduation_country] =
    useState("");

  const [faculty, setFaculty] = useState("");
  const [depts, setDepts] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let aq_higher_secondary = {
      country: aq_higher_secondary_country,
      mode: data.higher_secondary_mode,
      school: data.school,
      board: data.board,
      passingYear: data.passingYear,
      division: data.division,
      percentage: data.percentage,
    };
    let aq_graduation = {
      country: aq_graduation_country,
      mode: data.graduation_mode,
      institute: data.graduation_institute,
      college: data.graduation_college,
      year: data.graduation_year,
      area: data.graduation_area,
      course: data.graduation_course,
      division: data.graduation_division,
      percentage: data.graduation_percentage,
    };
    let aq_post_graduation = {
      country: aq_post_graduation_country,
      mode: data.post_graduation_mode,
      institute: data.post_graduation_institute,
      college: data.post_graduation_college,
      year: data.post_graduation_year,
      area: data.post_graduation_area,
      course: data.post_graduation_course,
      division: data.post_graduation_division,
      percentage: data.post_graduation_percentage,
    };
    data["cr_country"] = cr_country;
    data["cr_state"] = cr_region;
    data["native_country"] = native_country;
    data["native_state"] = native_region;
    data["aq_higher_secondary"] = aq_higher_secondary;
    data["aq_graduation"] = aq_graduation;
    data["aq_post_graduation"] = aq_post_graduation;
    console.log(data);
  };

  return (
    <div className="my-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Application Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="dob">
                  <Form.Label>Job Type</Form.Label>

                  <Form.Select
                    aria-label="Default Job Type"
                    {...register("jobtype", {
                      required: true,
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option>Academic</option>
                    <option>Non Academic</option>
                    <option>Administrative</option>
                  </Form.Select>
                  {errors.jobtype && (
                    <p style={{ color: "red" }}>Please select your job type</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="faculty">
                  <Form.Label>Faculty</Form.Label>
                  <Form.Select
                    aria-label="Default Faculty Type"
                    {...register("faculty", {
                      required: true,
                    })}
                    placeholder="acad"
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>

                    {list.map((faculty) => {
                      return <option>{faculty}</option>;
                    })}
                  </Form.Select>
                  {errors.faculty && (
                    <p style={{ color: "red" }}>
                      Please select your Faculty type
                    </p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="school">
                  <Form.Label>School</Form.Label>
                  <Form.Select
                    aria-label="Default Faculty Type"
                    {...register("school", {
                      required: true,
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>

                    {faculty &&
                      Object.keys(facultiesList[faculty]).map((dept) => {
                        return <option>{dept}</option>;
                      })}
                  </Form.Select>
                  {errors.school && (
                    <p style={{ color: "red" }}>Please select your school</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="faculty">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    aria-label="Default Faculty Type"
                    {...register("dept", {
                      required: true,
                    })}
                    placeholder="acad"
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    {depts &&
                      facultiesList[faculty][depts].map((dept) => {
                        return <option>{dept}</option>;
                      })}
                  </Form.Select>
                  {errors.dept && (
                    <p style={{ color: "red" }}>
                      Please select your Department
                    </p>
                  )}
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="faculty"
                  {...register("natureofjob", {
                    required: true,
                  })}
                >
                  <Form.Label>Nature of Job</Form.Label>
                  <Form.Check
                    type={"radio"}
                    placeholder="acad"
                    label={"Full-time"}
                  />
                  <Form.Check
                    type={"radio"}
                    placeholder="acad"
                    label={"Part-time"}
                  />

                  {errors.natureofjob && (
                    <p style={{ color: "red" }}>
                      Please select your Nature of Job
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
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
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  >
                    <option value="" />
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                  {errors.gender && (
                    <p style={{ color: "red" }}> {errors.gender.message}</p>
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
                    <br />
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
                    <br />
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
                    {...register("cr_city", {
                      required: true,
                      maxLength: 25,
                    })}
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
                    {...register("religion", {
                      required: "Please select your religion",
                    })}
                  >
                    <option value="" />
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
                    <p style={{ color: "red" }}> {errors.religion.message}</p>
                  )}
                </Form.Group>
                {/* Marrital Status Details  */}
                <Form.Group as={Col} md="3" controlId="marital_status">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("marital_status", {
                      required: "Please select your marital status",
                    })}
                  >
                    <option value="" />
                    <option value="single">Single</option>
                    <option value="engaged">Engaged</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                  </Form.Select>
                  {errors.marital_status && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.marital_status.message}
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. Academic / Professional Qualificaiton
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>Higher Seconday / Class 12th</b>
              </p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="aq_higher_secondary_country"
                >
                  {/* Academic Qualification Higher Seconday Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_higher_secondary_country}
                    onChange={(val) => setaq_higher_secondary_country(val)}
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
                  {errors.aq_higher_secondary_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qulalification Higher Secondary Country  */}
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="higher_secondary_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("higher_secondary_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option value="" />
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                  {errors.higher_secondary_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.higher_secondary_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* School  */}
                <Form.Group as={Col} md="3" controlId="school">
                  <Form.Label>School</Form.Label>
                  <Form.Control
                    placeholder="School Name"
                    type="text"
                    {...register("school", {
                      required: true,
                      maxLength: 50,
                    })}
                  />
                  {errors.school && (
                    <p style={{ color: "red" }}>
                      Please enter your school name
                    </p>
                  )}
                </Form.Group>
                {/* Board  */}
                <Form.Group as={Col} md="3" controlId="board">
                  <Form.Label>Board</Form.Label>
                  <Form.Control
                    placeholder="Board Name"
                    type="text"
                    {...register("board", {
                      required: true,
                      maxLength: 50,
                    })}
                  />
                  {errors.board && (
                    <p style={{ color: "red" }}>Please enter your board name</p>
                  )}
                </Form.Group>
                {/* Passing Year  */}
                <Form.Group as={Col} md="3" controlId="passingYear">
                  <Form.Label>Passing Year</Form.Label>
                  <Form.Control
                    placeholder="Passing Year"
                    type="number"
                    {...register("passingYear", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.passingYear && (
                    <p style={{ color: "red" }}>
                      Please enter your passing year
                    </p>
                  )}
                </Form.Group>
                {/* Division Details  */}
                <Form.Group as={Col} md="3" controlId="division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    {...register("division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="" />
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                  {errors.division && (
                    <p style={{ color: "red" }}> {errors.division.message}</p>
                  )}
                </Form.Group>
                {/* Aggregate Percentage  */}
                <Form.Group as={Col} md="3" controlId="percentage">
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    placeholder="Aggregate Percentage"
                    type="number"
                    {...register("percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                  {errors.percentage && (
                    <p style={{ color: "red" }}>Please enter your percentage</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Graduate</b>
              </p>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="aq_graduation_country">
                  {/* Academic Qualification Graduate Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_graduation_country}
                    onChange={(val) => setaq_graduation_country(val)}
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
                  {errors.aq_graduation_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="graduation_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("graduation_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option value="" />
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                  {errors.graduation_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.graduation_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="3" controlId="graduation_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("graduation_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.graduation_institute && (
                    <p style={{ color: "red" }}>
                      Please enter your university / institute name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="3" controlId="graduation_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    placeholder="College Name"
                    type="text"
                    {...register("graduation_college", {
                      maxLength: 100,
                    })}
                  />
                  {errors.graduation_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="3" controlId="graduation_year">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    placeholder="Graduation Year"
                    type="number"
                    {...register("graduation_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.graduation_year && (
                    <p style={{ color: "red" }}>
                      Please enter your graduation year
                    </p>
                  )}
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="3" controlId="graduation_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    placeholder="Area"
                    type="text"
                    {...register("graduation_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.graduation_area && (
                    <p style={{ color: "red" }}>Please enter your area</p>
                  )}
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md="3" controlId="graduation_course">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    placeholder="Course Name"
                    type="text"
                    {...register("graduation_course", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.graduation_course && (
                    <p style={{ color: "red" }}>
                      Please enter your course name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md="3" controlId="graduation_division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    {...register("graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="" />
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                  {errors.graduation_division && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.graduation_division.message}
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group as={Col} md="3" controlId="graduation_percentage">
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    placeholder="Aggregate Percentage"
                    type="number"
                    {...register("graduation_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                  {errors.graduation_percentage && (
                    <p style={{ color: "red" }}>Please enter your percentage</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Post Graduate</b>
              </p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="aq_post_graduate_country"
                >
                  {/* Academic Qualification Post Graduate Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_post_graduation_country}
                    onChange={(val) => setaq_post_graduation_country(val)}
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
                  {errors.aq_post_graduation_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="post_graduation_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("post_graduation_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option value="" />
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                    <option value="distance-learning-online">
                      Distance Learning / Online
                    </option>
                  </Form.Select>
                  {errors.post_graduation_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.post_graduation_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="post_graduation_institute"
                >
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("post_graduation_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_graduation_institute && (
                    <p style={{ color: "red" }}>
                      Please enter your university / institute name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="3" controlId="post_graduation_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    placeholder="College Name"
                    type="text"
                    {...register("post_graduation_college", {
                      maxLength: 100,
                    })}
                  />
                  {errors.post_graduation_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="3" controlId="post_graduation_year">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    placeholder="Graduation Year"
                    type="number"
                    {...register("post_graduation_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.post_graduation_year && (
                    <p style={{ color: "red" }}>
                      Please enter your post graduation year
                    </p>
                  )}
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="3" controlId="post_graduation_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    placeholder="Area"
                    type="text"
                    {...register("post_graduation_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_graduation_area && (
                    <p style={{ color: "red" }}>Please enter your area</p>
                  )}
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md="3" controlId="post_graduation_course">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    placeholder="Course Name"
                    type="text"
                    {...register("post_graduation_course", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_graduation_course && (
                    <p style={{ color: "red" }}>
                      Please enter your course name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="post_graduation_division"
                >
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    {...register("post_graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="" />
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                  {errors.post_graduation_division && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.post_graduation_division.message}
                    </p>
                  )}
                </Form.Group>
                {/* Post Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="post_graduation_percentage"
                >
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    placeholder="Aggregate Percentage"
                    type="number"
                    {...register("post_graduation_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                  {errors.post_graduation_percentage && (
                    <p style={{ color: "red" }}>Please enter your percentage</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>M Phil</b>
              </p>
              <Row className="mb-3"></Row>
              <hr />
              <p>
                <b>Ph.D</b>
              </p>
              <Row className="mb-3"></Row>
              <hr />
              <p>
                <b>Post Doctoral</b>
              </p>
              <Row className="mb-3"></Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Testing;
