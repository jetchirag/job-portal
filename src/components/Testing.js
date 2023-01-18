import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { facultiesList, list } from "../components/Form/faculties (1)";
import Accordion from "react-bootstrap/Accordion";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Testing = () => {
  const [part8, setPart8] = useState(true);
  const handlePart8 = () => {
    setPart8(!part8);
  };
  const [part9, setPart9] = useState(true);
  const handlePart9 = () => {
    setPart9(!part9);
  };
  const [part10, setPart10] = useState(true);
  const handlePart10 = () => {
    setPart10(!part10);
  };

  const [part11, setPart11] = useState(true);
  const handlePart11 = () => {
    setPart11(!part11);
  };

  const [knowanyone,setKnowAnyone] = useState(false);
  const handleKnowAnyone = () =>{
    setKnowAnyone(!knowanyone);
  }

  
  const [faculty, setFaculty] = useState("");
  const facultyHandler = (e) => {
    setFaculty(e.target.value);
  };

  const [school, setSchool] = useState("");
  const schoolHandler = (e) => {
    setSchool(e.target.value);
  };

  // const [depts, setDepts] = useState("");
  // const deptHandler = (e) => {
  //   setDepts(e.target.value);
  // };
  const [cr_country, setcr_Country] = useState("");
  const [cr_region, setcr_Region] = useState("");
  const [native_country, setnative_Country] = useState("");
  const [native_region, setnative_Region] = useState("");
  const [aq_higher_secondary_country, setaq_higher_secondary_country] =
    useState("");
  const [aq_graduation_country, setaq_graduation_country] = useState("");
  const [aq_post_graduation_country, setaq_post_graduation_country] =
    useState("");
  const [aq_mphil_country, setaq_mphil_country] = useState("");
  const [aq_phd_country, setaq_phd_country] = useState("");
  const [aq_post_doctoral_country, setaq_post_doctoral_country] = useState("");
  const [academicExperience_country, setacademicExperience_country] =
    useState("");
  const [nonAcademicExperience_country, setnonAcademicExperience_country] =
    useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let applicant = {
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      gender: data.gender,
      religion: data.religion,
      marital_status: data.marital_status,
      mobile: data.mobile,
      email: data.email,
    };
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
    let aq_mphil = {
      country: aq_mphil_country,
      mode: data.mphil_mode,
      institute: data.mphil_institute,
      college: data.mphil_college,
      year: data.mphil_year,
      area: data.mphil_area,
      division: data.mphil_division,
      percentage: data.mphil_percentage,
    };
    let aq_phd = {
      country: aq_phd_country,
      mode: data.phd_mode,
      institute: data.phd_institute,
      college: data.phd_college,
      year: data.phd_year,
      area: data.phd_area,
      teachingExperience: data.phd_teaching_experience,
      year2: data.phd_anti_completion_year,
    };
    let aq_post_doctoral = {
      country: aq_post_doctoral_country,
      mode: data.post_doctoral_mode,
      institute: data.post_doctoral_institute,
      college: data.post_doctoral_college,
      year: data.post_doctoral_year,
      area: data.post_doctoral_area,
      course: data.post_doctoral_course,
      division: data.post_doctoral_division,
      percentage: data.post_doctoral_percentage,
    };
    let academicQualification = {
      gate: data.gate,
      ugcNet: data.ugcNet,
      ugcJrf: data.ugcJrf,
      urcCsir: data.urcCsir,
      icmr: data.icmr,
      icar: data.icar,
    };
    let academicExperience = {
      natureOfJob: data.academicExperience_mode,
      country: academicExperience_country,
      university: data.academicExperience_university,
      college: data.academicExperience_college,
      position: data.academicExperience_position,
      academicDomain: data.academicExperience_domain,
      dateFrom: data.academicExperience_datefrom,
      dateTo: data.academicExperience_dateto,
    };
    let nonAcademicExperience = {
      natureOfJob: data.nonAcademicExperience_mode,
      country: nonAcademicExperience_country,
      organization: data.nonAcademicExperience_organization,
      designation: data.nonAcademicExperience_designation,
      department: data.nonAcademicExperience_department,
      dateFrom: data.nonAcademicExperience_datefrom,
      dateTo: data.nonAcademicExperience_dateto,
    };
    let fellowships = {
      fellowshipDetail: data.fellowship_details,
      year: data.fellowship_year,
      amount: data.fellowship_amount,
      fellowshipStatus: data.fellowship_status,
    };
    let research = {
      orcid: data.research_orcid,
      scopus: data.research_scopus,
      webofscience: data.research_webofscience,
      cif: data.research_cif,
      nop_total: data.research_nop_total,
      nop_ugc_care_list: data.research_nop_ugc_care_list,
      nop_sci: data.research_nop_sci,
      nop_web_science: data.research_nop_web_science,
      nop_google_scholar: data.research_nop_google_scholar,
      nop_scopus: data.research_nop_scopus,
      nop_three_total: data.research_nop_three_total,
      nop_three_ugc_care_list: data.research_nop_three_ugc_care_list,
      nop_three_sci: data.research_nop_three_sci,
      nop_three_web_science: data.research_nop_three_web_science,
      nop_three_google_scholar: data.research_nop_three_google_scholar,
      nop_three_scopus: data.research_nop_three_scopus,
      number_citations: data.research_number_citations,
      completed_funded_projects: data.research_completed_funded_projects,
      amount_completed_funded_projects:
        data.research_amount_completed_funded_projects,
      ongoing_funded_projects: data.research_ongoing_funded_projects,
      amount_ongoing_funded_projects:
        data.research_amount_ongoing_funded_projects,
      presented_total: data.research_presented_total,
      presented_national: data.research_presented_national,
      presented_international: data.research_presented_international,
      attended_total: data.research_attended_total,
      attended_national: data.research_attended_national,
      attended_international: data.research_attended_international,
      organized_total: data.research_organized_total,
      organized_national: data.research_organized_national,
      organized_international: data.research_organized_international,
      guidance_completed_independent_mphil:
        data.research_guidance_completed_independent_mphil,
      guidance_completed_independent_phd:
        data.research_guidance_completed_independent_phd,
      guidance_completed_supervisor_mphil:
        data.research_guidance_completed_supervisor_mphil,
      guidance_completed_supervisor_phd:
        data.research_guidance_completed_supervisor_phd,
      guidance_supervision_independent_mphil:
        data.research_guidance_supervision_independent_mphil,
      guidance_supervision_independent_phd:
        data.research_guidance_supervision_independent_phd,
      guidance_supervision_supervisor_mphil:
        data.research_guidance_supervision_supervisor_mphil,
      guidance_supervision_supervisor_phd:
        data.research_guidance_supervision_supervisor_phd,
    };
    let books = {
      detail: data.book_details,
      ISBNNumber: data.book_isbn,
      writtenAs: data.book_written,
    };

    let patent = {
      patentDetail: data.patent_details,
      year: data.patent_year,
      status: data.patent_status,
    };

    let peerRecognition = {
      awards: data.peerRecognition_awards,
      agency: data.peerRecognition_agency,
      year: data.peerRecognition_year,
    };

    data.jobType = data.jobtype;
    data.faculty = data.faculty;
    data.school_main = data.school;
    data.department = data.department;
    data.nature_of_job = data.natureofjob;
    data["cr_country"] = cr_country;
    data["cr_state"] = cr_region;
    data["native_country"] = native_country;
    data["native_state"] = native_region;
    data["applicant"] = applicant;
    data["aq_higher_secondary"] = aq_higher_secondary;
    data["aq_graduation"] = aq_graduation;
    data["aq_post_graduation"] = aq_post_graduation;
    data["aq_mphil"] = aq_mphil;
    data["aq_phd"] = aq_phd;
    data["aq_post_doctoral"] = aq_post_doctoral;
    data["academicQualification"] = academicQualification;
    data["academicExperience"] = academicExperience;
    data["nonAcademicExperience"] = nonAcademicExperience;
    data["fellowships"] = fellowships;
    data["research"] = research;
    data["books"] = books;
    data["patent"] = patent;
    data["peerRecognition"] = peerRecognition;
    console.log(data);

    try {
      const response = await fetch("http://65.109.166.43:3000/applications", {
        method: "post",
        body: data,
      });
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  return (
    <div className="my-4">
      <div className="container">
        <h2 className="center">Job Application Form</h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* This is part 1 */}
        <Accordion style={{ padding: "0 5%" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Application Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="dob">
                  <Form.Label>Job Type</Form.Label>

                  <Form.Select
                    size="sm"
                    aria-label="Default Job Type"
                    {...register("jobtype", {
                      required: true,
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option value="academic">Academic</option>
                    <option value="non_academic">Non Academic</option>
                    <option value="administration">Administrative</option>
                  </Form.Select>
                  {errors.jobtype && (
                    <p style={{ color: "red" }}>Please select your job type</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="faculty">
                  <Form.Label>Faculty</Form.Label>
                  <Form.Select
                    size="sm"
                    aria-label="Default Faculty Type"
                    {...register("faculty", {
                      required: true,
                    })}
                    placeholder="acad"
                    onChange={facultyHandler}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>

                    {Object.keys(facultiesList).map((faculty) => {
                      return <option value={faculty}>{faculty}</option>;
                    })}
                  </Form.Select>
                  {errors.faculty && (
                    <p style={{ color: "red" }}>
                      Please select your Faculty type
                    </p>
                  )}
                </Form.Group>
                {faculty && (
                  <Form.Group as={Col} md="3" controlId="faculty">
                    <Form.Label>School</Form.Label>
                    <Form.Select
                      size="sm"
                      aria-label="Default Faculty Type"
                      {...register("school", {
                        required: true,
                      })}
                      onChange={schoolHandler}
                    >
                      <option selected="" disabled="" value="">
                        Choose...
                      </option>

                      {faculty &&
                        Object.keys(facultiesList[faculty]).map((sch) => {
                          return <option value={sch}>{sch}</option>;
                        })}
                    </Form.Select>
                    {errors.school && (
                      <p style={{ color: "red" }}>Please select your school</p>
                    )}
                  </Form.Group>
                )}
                {school && (
                  <Form.Group as={Col} md="3" controlId="faculty">
                    <Form.Label>Department</Form.Label>
                    <Form.Select
                      size="sm"
                      aria-label="Default Faculty Type"
                      {...register("dept", {
                        // required: true,
                      })}
                    >
                      <option selected="" disabled="" value="">
                        Choose...
                      </option>
                      {school &&
                        facultiesList[faculty][school].map((dept) => {
                          return <option value={dept}>{dept}</option>;
                        })}
                    </Form.Select>
                    {errors.dept && (
                      <p style={{ color: "red" }}>
                        Please select your Department
                      </p>
                    )}
                  </Form.Group>
                )}
                <Form.Group as={Col} md="3" controlId="faculty">
                  <Form.Label>Nature of Job</Form.Label>
                  <Form.Check
                    type={"radio"}
                    placeholder="acad"
                    label={"Full-time"}
                    id={"natureofjob"}
                    name={"natureofjob"}
                    {...register("natureofjob", {
                      required: true,
                    })}
                  />
                  <Form.Check
                    type={"radio"}
                    placeholder="acad"
                    label={"Part-time"}
                    id={"natureofjob"}
                    name={"natureofjob"}
                    {...register("natureofjob", {
                      required: true,
                    })}
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
          {/* This is part 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Personal Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* First Name Details  */}
                <Form.Group as={Col} md="3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    size="sm"
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
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
                    size="sm"
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
                    size="sm"
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
                  {errors.religion && (
                    <p style={{ color: "red" }}> {errors.religion.message}</p>
                  )}
                </Form.Group>
                {/* Marrital Status Details  */}
                <Form.Group as={Col} md="3" controlId="marital_status">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select
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
                    size="sm"
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
                    size="sm"
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
          {/*This is part 3  */}
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
                    size="sm"
                    {...register("higher_secondary_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    higher_secondary_mode
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
                    {...register("division", {
                      required: "Please select your division",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
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
                    size="sm"
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
                    size="sm"
                    {...register("graduation_mode", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
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
                    size="sm"
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
                    size="sm"
                    placeholder="College Name"
                    type="text"
                    {...register("graduation_college", {
                      required: true,
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
                    {...register("graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
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
                    size="sm"
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
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
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
                    size="sm"
                    placeholder="College Name"
                    type="text"
                    {...register("post_graduation_college", {
                      required: true,
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
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
                    size="sm"
                    {...register("post_graduation_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
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
                    size="sm"
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
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="aq_mphil_country">
                  {/* Academic Qualification M Phil Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_mphil_country}
                    onChange={(val) => setaq_mphil_country(val)}
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
                  {errors.aq_mphil_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="mphil_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("mphil_mode", {
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
                  {errors.mphil_mode && (
                    <p style={{ color: "red" }}> {errors.mphil_mode.message}</p>
                  )}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="3" controlId="mphil_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("mphil_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.mphil_institute && (
                    <p style={{ color: "red" }}>
                      Please enter your university / institute name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="3" controlId="mphil_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    placeholder="College Name"
                    type="text"
                    {...register("mphil_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.mphil_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="3" controlId="mphil_year">
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control
                    placeholder="Graduation Year"
                    type="number"
                    {...register("mphil_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.mphil_year && (
                    <p style={{ color: "red" }}>
                      Please enter your m phil year
                    </p>
                  )}
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="3" controlId="mphil_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    placeholder="Area"
                    type="text"
                    {...register("mphil_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.mphil_area && (
                    <p style={{ color: "red" }}>Please enter your area</p>
                  )}
                </Form.Group>
                {/* M Phil Division Details  */}
                <Form.Group as={Col} md="3" controlId="mphil_division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    {...register("mphil_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="" />
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                  {errors.mphil_division && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.mphil_division.message}
                    </p>
                  )}
                </Form.Group>
                {/* M Phil Aggregate Percentage  */}
                <Form.Group as={Col} md="3" controlId="mphil_percentage">
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    placeholder="Aggregate Percentage"
                    type="number"
                    {...register("mphil_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                  {errors.mphil_percentage && (
                    <p style={{ color: "red" }}>Please enter your percentage</p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Ph.D</b>
              </p>
              <Row className="mb-3">
                {/* PHD Status Details  */}
                <Form.Group as={Col} md="3" controlId="phd_status">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    {...register("phd_status", {
                      required: "Please select your status",
                    })}
                  >
                    <option value="" />
                    <option value="pursuing">Pursuing</option>
                    <option value="awarded">awarded</option>
                    <option value="thesis-submitted">Thesis Submitted</option>
                  </Form.Select>
                  {errors.phd_status && (
                    <p style={{ color: "red" }}> {errors.phd_status.message}</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="aq_phd_country">
                  {/* Academic Qualification PhD Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_phd_country}
                    onChange={(val) => setaq_phd_country(val)}
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
                  {errors.aq_phd_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="phd_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("phd_mode", {
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
                  {errors.phd_mode && (
                    <p style={{ color: "red" }}> {errors.phd_mode.message}</p>
                  )}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="3" controlId="phd_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("phd_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.phd_institute && (
                    <p style={{ color: "red" }}>
                      Please enter your university / institute name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="3" controlId="phd_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    placeholder="College Name"
                    type="text"
                    {...register("phd_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.phd_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Completion Year  */}
                <Form.Group as={Col} md="3" controlId="phd_year">
                  <Form.Label>Completion Year</Form.Label>
                  <Form.Control
                    placeholder="Completion Year"
                    type="number"
                    {...register("phd_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.phd_year && (
                    <p style={{ color: "red" }}>
                      Please enter your completion year
                    </p>
                  )}
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="3" controlId="phd_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    placeholder="Area"
                    type="text"
                    {...register("phd_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.phd_area && (
                    <p style={{ color: "red" }}>Please enter your area</p>
                  )}
                </Form.Group>
                {/* If pursuilng teaching experiance during phd  */}
                <Form.Group as={Col} md="3" controlId="phd_teaching_experience">
                  <Form.Label>
                    If pursuing, teaching experience during PhD
                  </Form.Label>
                  <Form.Select
                    {...register("phd_teaching_experience", {
                      required: "Please select your mode of educatoin",
                    })}
                  >
                    <option value="" />
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Select>
                  {errors.phd_teaching_experience && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.phd_teaching_experience.message}
                    </p>
                  )}
                </Form.Group>
                {/* Anticipated Completion Year  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="phd_anti_completion_year"
                >
                  <Form.Label>Anticipated Completion Year</Form.Label>
                  <Form.Control
                    placeholder="Anticipated Completion Year"
                    type="number"
                    {...register("phd_anti_completion_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.phd_anti_completion_year && (
                    <p style={{ color: "red" }}>
                      Please enter your anticipated completion year
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Post Doctoral</b>
              </p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="aq_post_doctoral_country"
                >
                  {/* Academic Qualification Post Doctoral Country  */}
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={aq_post_doctoral_country}
                    onChange={(val) => setaq_post_doctoral_country(val)}
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
                  {errors.post_doctoral_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Academic Qualification Education Mode Details  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_mode">
                  <Form.Label>Education Mode</Form.Label>
                  <Form.Select
                    {...register("post_doctoral_mode", {
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
                  {errors.post_doctoral_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.post_doctoral_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* University / Institute  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_institute">
                  <Form.Label>University / Institute</Form.Label>
                  <Form.Control
                    placeholder="University/Institute Name"
                    type="text"
                    {...register("post_doctoral_institute", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_doctoral_institute && (
                    <p style={{ color: "red" }}>
                      Please enter your university / institute name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_college">
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    placeholder="College Name"
                    type="text"
                    {...register("post_doctoral_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_doctoral_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Year  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    placeholder="Graduation Year"
                    type="number"
                    {...register("post_doctoral_year", {
                      required: true,
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.post_doctoral_year && (
                    <p style={{ color: "red" }}>
                      Please enter your post doctoral year
                    </p>
                  )}
                </Form.Group>
                {/* Area Details  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_area">
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    placeholder="Area"
                    type="text"
                    {...register("post_doctoral_area", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_doctoral_area && (
                    <p style={{ color: "red" }}>Please enter your area</p>
                  )}
                </Form.Group>
                {/* Course Details  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_course">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    placeholder="Course Name"
                    type="text"
                    {...register("post_doctoral_course", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.post_doctoral_course && (
                    <p style={{ color: "red" }}>
                      Please enter your course name
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Division Details  */}
                <Form.Group as={Col} md="3" controlId="post_doctoral_division">
                  <Form.Label>Division</Form.Label>
                  <Form.Select
                    {...register("post_doctoral_division", {
                      required: "Please select your division",
                    })}
                  >
                    <option value="" />
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </Form.Select>
                  {errors.post_doctoral_division && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.post_doctoral_division.message}
                    </p>
                  )}
                </Form.Group>
                {/* Graduation Aggregate Percentage  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="post_doctoral_percentage"
                >
                  <Form.Label>Aggregate Percentage</Form.Label>
                  <Form.Control
                    placeholder="Aggregate Percentage"
                    type="number"
                    {...register("post_doctoral_percentage", {
                      required: true,
                      minValue: 0,
                      maxValue: 100,
                    })}
                  />
                  {errors.post_doctoral_percentage && (
                    <p style={{ color: "red" }}>Please enter your percentage</p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* This is part 4  */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>4.Qualified in:</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* Gate Details  */}
                <Form.Group as={Col} md="3" controlId="gate">
                  <Form.Label>Gate Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Gate Year"
                    type="number"
                    {...register("gate", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.gate && (
                    <p style={{ color: "red" }}>Please enter your gate year</p>
                  )}
                </Form.Group>
                {/* UGC Net Details  */}
                <Form.Group as={Col} md="3" controlId="ugcNet">
                  <Form.Label>UGC Net Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="UGC Net Year"
                    type="number"
                    {...register("ugcNet", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.ugcNet && (
                    <p style={{ color: "red" }}>
                      Please enter your UGC Net year
                    </p>
                  )}
                </Form.Group>
                {/* UGC JRF Details  */}
                <Form.Group as={Col} md="3" controlId="ugcJrf">
                  <Form.Label>UGC JRF Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="UGC JRF Year"
                    type="number"
                    {...register("ugcJrf", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.ugcJrf && (
                    <p style={{ color: "red" }}>
                      Please enter your UGC JRF year
                    </p>
                  )}
                </Form.Group>
                {/* URC CSIR Details  */}
                <Form.Group as={Col} md="3" controlId="urcCsir">
                  <Form.Label>URC CSIR Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="URC CSIR Year"
                    type="number"
                    {...register("urcCsir", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.urcCsir && (
                    <p style={{ color: "red" }}>
                      Please enter your URC CSIR year
                    </p>
                  )}
                </Form.Group>
                {/* ICMR Details  */}
                <Form.Group as={Col} md="3" controlId="icmr">
                  <Form.Label>ICMR Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="ICMR Year"
                    type="number"
                    {...register("icmr", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.icmr && (
                    <p style={{ color: "red" }}>Please enter your ICMR year</p>
                  )}
                </Form.Group>
                {/* ICAR Details  */}
                <Form.Group as={Col} md="3" controlId="icar">
                  <Form.Label>ICAR Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="ICAR Year"
                    type="number"
                    {...register("icar", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.icar && (
                    <p style={{ color: "red" }}>Please enter your ICAR year</p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* This is part 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Experience</Accordion.Header>
            <Accordion.Body>
              <p>
                <b>Academic</b>
              </p>
              <Row className="mb-3">
                {/* Nature of job  */}
                <Form.Group as={Col} md="3" controlId="academicExperience_mode">
                  <Form.Label>Nature of Job</Form.Label>
                  <Form.Select
                    size="sm"
                    {...register("academicExperience_mode", {
                      // required: "Please select the nature of your job",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                  </Form.Select>
                  {errors.academicExperience_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.academicExperience_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* Country of job  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_country"
                >
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={academicExperience_country}
                    onChange={(val) => setacademicExperience_country(val)}
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
                  {errors.academicExperience_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* University  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_university"
                >
                  <Form.Label>University</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="University"
                    type="text"
                    {...register("academicExperience_university", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.academicExperience_university && (
                    <p style={{ color: "red" }}>
                      Please enter your university name
                    </p>
                  )}
                </Form.Group>
                {/* College Name  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_college"
                >
                  <Form.Label>College</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="College Name"
                    type="text"
                    {...register("academicExperience_college", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.academicExperience_college && (
                    <p style={{ color: "red" }}>
                      Please enter your college name
                    </p>
                  )}
                </Form.Group>
                {/* Postion of work  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_position"
                >
                  <Form.Label>Position</Form.Label>
                  <Form.Select
                    size="sm"
                    {...register("academicExperience_position", {
                      required: "Please select the position you worked in",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option value="professor">Professor</option>
                    <option value="associate-professor">
                      Associate Professor
                    </option>
                    <option value="assistant-professor">
                      Assistant Professor
                    </option>
                    <option value="research-assistant">
                      Research Assistant
                    </option>
                  </Form.Select>
                  {errors.academicExperience_position && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.academicExperience_position.message}
                    </p>
                  )}
                </Form.Group>
                {/* Academic Domain Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_domain"
                >
                  <Form.Label>Academic Domain</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Academic Domain"
                    type="text"
                    {...register("academicExperience_domain", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.academicExperience_domain && (
                    <p style={{ color: "red" }}>
                      Please enter your academic domain
                    </p>
                  )}
                </Form.Group>
                {/* Working From Date Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_datefrom"
                >
                  <Form.Label>Date From</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    {...register("academicExperience_datefrom")}
                  />
                  {errors.academicExperience_datefrom && (
                    <p style={{ color: "red" }}>
                      Please select the date you are working from
                    </p>
                  )}
                </Form.Group>
                {/* Working To Date Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="academicExperience_dateto"
                >
                  <Form.Label>Date To</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    {...register("academicExperience_dateto")}
                  />
                  {errors.academicExperience_dateto && (
                    <p style={{ color: "red" }}>
                      Please select the date you are working to
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Non Academic</b>
              </p>
              <Row className="mb-3">
                {/* Nature of job  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_mode"
                >
                  <Form.Label>Nature of Job</Form.Label>
                  <Form.Select
                    size="sm"
                    {...register("nonAcademicExperience_mode", {
                      required: "Please select the nature of your job",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option value="regular">Regular</option>
                    <option value="part-time">Part-Time</option>
                  </Form.Select>
                  {errors.nonAcademicExperience_mode && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.nonAcademicExperience_mode.message}
                    </p>
                  )}
                </Form.Group>
                {/* Country of job  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_country"
                >
                  <Form.Label>Country</Form.Label>
                  <CountryDropdown
                    value={nonAcademicExperience_country}
                    onChange={(val) => setnonAcademicExperience_country(val)}
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
                  {errors.nonAcademicExperience_country && (
                    <p style={{ color: "red" }}>Please select your country</p>
                  )}
                </Form.Group>
                {/* Organization Name  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_organization"
                >
                  <Form.Label>Organization</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Organization Name"
                    type="text"
                    {...register("nonAcademicExperience_organization", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.nonAcademicExperience_organization && (
                    <p style={{ color: "red" }}>
                      Please enter your organization name
                    </p>
                  )}
                </Form.Group>
                {/* Designation Name  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_designation"
                >
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Designation Name"
                    type="text"
                    {...register("nonAcademicExperience_designation", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.nonAcademicExperience_designation && (
                    <p style={{ color: "red" }}>
                      Please enter your designation name
                    </p>
                  )}
                </Form.Group>
                {/* Department Name  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_department"
                >
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Department Name"
                    type="text"
                    {...register("nonAcademicExperience_department", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.nonAcademicExperience_department && (
                    <p style={{ color: "red" }}>
                      Please enter your department name
                    </p>
                  )}
                </Form.Group>
                {/* Working From Date Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_datefrom"
                >
                  <Form.Label>Date From</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    {...register("nonAcademicExperience_datefrom")}
                  />
                  {errors.nonAcademicExperience_datefrom && (
                    <p style={{ color: "red" }}>
                      Please select the date you are working from
                    </p>
                  )}
                </Form.Group>
                {/* Working To Date Details  */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="nonAcademicExperience_dateto"
                >
                  <Form.Label>Date To</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="DD/MM/YYYY"
                    type="date"
                    {...register("nonAcademicExperience_dateto")}
                  />
                  {errors.nonAcademicExperience_dateto && (
                    <p style={{ color: "red" }}>
                      Please select the date you are working to
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* This is part 6 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>6. Fellowships Achieved</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* Fellowship Details  */}
                <Form.Group as={Col} md="12" controlId="fellowship_details">
                  <Form.Label>Fellowship Detail</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Fellowship Detail"
                    type="text"
                    {...register("fellowship_details", {
                      required: false,
                      maxLength: 300,
                    })}
                  />
                  {errors.fellowship_details && (
                    <p style={{ color: "red" }}>
                      Please enter your fellowship detail
                    </p>
                  )}
                </Form.Group>
                {/* Fellowship Year Detail  */}
                <Form.Group as={Col} md="3" controlId="fellowship_year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Year"
                    type="number"
                    {...register("fellowship_year", {
                      maxLength: 4,
                      minLength: 4,
                    })}
                  />
                  {errors.fellowship_year && (
                    <p style={{ color: "red" }}>
                      Please enter your fellowship year
                    </p>
                  )}
                </Form.Group>
                {/* Fellowship Amount Detail  */}
                <Form.Group as={Col} md="3" controlId="fellowship_amount">
                  <Form.Label>Amount per annum</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Amount per annum"
                    type="number"
                    {...register("fellowship_amount", {
                      maxLength: 15,
                      minLength: 0,
                    })}
                  />
                  {errors.fellowship_amount && (
                    <p style={{ color: "red" }}>
                      Please enter your fellowship amount per annum
                    </p>
                  )}
                </Form.Group>
                {/* Fellowship Status Details  */}
                <Form.Group as={Col} md="3" controlId="fellowship_status">
                  <Form.Label>Fellowship Status</Form.Label>
                  <Form.Select
                    {...register("fellowship_status", {
                    })}
                  >
                    <option value="" />
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </Form.Select>
                  {errors.fellowship_status && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.fellowship_status.message}
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          {/* This is part 7  */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>7. Research Work</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* Research Work Main  */}
                <Form.Group as={Col} md="6" controlId="research_orcid">
                  <Form.Label>Your orcid ID</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="orcid ID"
                    type="text"
                    {...register("research_orcid", {
                      required: false,
                      maxLength: 400,
                    })}
                  />
                  {errors.research_orcid && (
                    <p style={{ color: "red" }}>Please enter your orcid ID</p>
                  )}
                </Form.Group>
                {/* h-Index as per SCOPUS */}
                <Form.Group as={Col} md="6" controlId="research_scopus">
                  <Form.Label>h-Index as per SCOPUS</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="h-Index - SCOPUS"
                    type="text"
                    {...register("research_scopus", {
                      required: false,
                      maxLength: 400,
                    })}
                  />
                  {errors.research_scopus && (
                    <p style={{ color: "red" }}>
                      Please enter your h-Index as per SCOPUS
                    </p>
                  )}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                {/* h-Index as per Web of science  */}
                <Form.Group as={Col} md="6" controlId="research_webofscience">
                  <Form.Label>h-Index as per Web of science</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="h-Index"
                    type="text"
                    {...register("research_webofscience", {
                      required: false,
                      maxLength: 400,
                    })}
                  />
                  {errors.research_webofscience && (
                    <p style={{ color: "red" }}>
                      Please enter your h-Index as per Web of science
                    </p>
                  )}
                </Form.Group>
                {/* Cumulative Impact Factor */}
                <Form.Group as={Col} md="6" controlId="research_cif">
                  <Form.Label>Cumulative Impact Factor</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Cumulative Impact Factor"
                    type="text"
                    {...register("research_cif", {
                      required: false,
                      maxLength: 400,
                    })}
                  />
                  {errors.research_cif && (
                    <p style={{ color: "red" }}>
                      Please enter your Cumulative Impact Factor
                    </p>
                  )}
                </Form.Group>
              </Row>
              {/* Number of publications */}
              <hr />
              <p>
                <b>Number of publications</b>
              </p>
              <hr />
              <p>Research Paper Published (Total)</p>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="research_nop_total">
                  <Form.Label>Total</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Total"
                    type="number"
                    {...register("research_nop_total", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_total && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published
                    </p>
                  )}
                </Form.Group>
                {/* As per UGC Care List */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_ugc_care_list"
                >
                  <Form.Label>As per UGC Care List</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="As per UGC Care List"
                    type="number"
                    {...register("research_nop_ugc_care_list", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_ugc_care_list && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published as
                      per UGC care list
                    </p>
                  )}
                </Form.Group>
                {/* SCI */}
                <Form.Group as={Col} md="3" controlId="research_nop_sci">
                  <Form.Label>SCI</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="SCI"
                    type="number"
                    {...register("research_nop_sci", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_sci && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published SCI
                    </p>
                  )}
                </Form.Group>
                {/* Web of Science */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_web_science"
                >
                  <Form.Label>Web of Science</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Web of Science"
                    type="number"
                    {...register("research_nop_web_science", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_web_science && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published web
                      of science
                    </p>
                  )}
                </Form.Group>
                {/* Google Scholar */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_google_scholar"
                >
                  <Form.Label>Google Scholar</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Google Scholar"
                    type="number"
                    {...register("research_nop_google_scholar", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_google_scholar && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published on
                      google scholar
                    </p>
                  )}
                </Form.Group>
                {/* Scopus */}
                <Form.Group as={Col} md="3" controlId="research_nop_scopus">
                  <Form.Label>Scopus</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Scopus"
                    type="number"
                    {...register("research_nop_scopus", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_scopus && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published on
                      scopus
                    </p>
                  )}
                </Form.Group>
              </Row>
              {/* Research Paper Published in the last three years  */}
              <hr />
              <p>Research Paper Published in the last three years</p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_three_total"
                >
                  <Form.Label>Total</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Total"
                    type="number"
                    {...register("research_nop_three_total", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_total && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published in
                      last three years
                    </p>
                  )}
                </Form.Group>
                {/* As per UGC Care List */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_three_ugc_care_list"
                >
                  <Form.Label>As per UGC Care List</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="As per UGC Care List"
                    type="number"
                    {...register("research_nop_three_ugc_care_list", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_ugc_care_list && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published as
                      per UGC care list
                    </p>
                  )}
                </Form.Group>
                {/* SCI */}
                <Form.Group as={Col} md="3" controlId="research_nop_three_sci">
                  <Form.Label>SCI</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="SCI"
                    type="number"
                    {...register("research_nop_three_sci", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_sci && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published SCI
                    </p>
                  )}
                </Form.Group>
                {/* Web of Science */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_three_web_science"
                >
                  <Form.Label>Web of Science</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Web of Science"
                    type="number"
                    {...register("research_nop_three_web_science", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_web_science && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published web
                      of science
                    </p>
                  )}
                </Form.Group>
                {/* Google Scholar */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_three_google_scholar"
                >
                  <Form.Label>Google Scholar</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Google Scholar"
                    type="number"
                    {...register("research_nop_three_google_scholar", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_google_scholar && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published on
                      google scholar
                    </p>
                  )}
                </Form.Group>
                {/* Scopus */}
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="research_nop_three_scopus"
                >
                  <Form.Label>Scopus</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Scopus"
                    type="number"
                    {...register("research_nop_three_scopus", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_nop_three_scopus && (
                    <p style={{ color: "red" }}>
                      Please enter total number of research paper published on
                      scopus
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>
                <b>Number of citations (in last three years)</b>
              </p>
              <Row className="mb-3">
                {/* Number of citations (in last three years) */}
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="research_number_citations"
                >
                  <Form.Control
                    size="sm"
                    placeholder="Number of citations (in last three years)"
                    type="number"
                    {...register("research_number_citations", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_number_citations && (
                    <p style={{ color: "red" }}>
                      Please enter total number of citations (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              {/* No. of Funded Projects (in last three years) */}
              <hr />
              <p>
                <b>No. of Funded Projects (in last three years)</b>
              </p>
              <hr />
              <p>Completed</p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="research_completed_funded_projects"
                >
                  <Form.Label>No. of Projects</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Number of citations (in last three years)"
                    type="number"
                    {...register("research_completed_funded_projects", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_completed_funded_projects && (
                    <p style={{ color: "red" }}>
                      Please enter total no. of funded projects (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
                {/* Amount  */}
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="research_amount_completed_funded_projects"
                >
                  <Form.Label>Amount (INR)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Number of citations (in last three years)"
                    type="number"
                    {...register("research_amount_completed_funded_projects", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_amount_completed_funded_projects && (
                    <p style={{ color: "red" }}>
                      Please enter amount of funds (in last three years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>Ongoing</p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="research_ongoing_funded_projects"
                >
                  <Form.Label>No. of Projects</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Number of citations (in last three years)"
                    type="number"
                    {...register("research_ongoing_funded_projects", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_ongoing_funded_projects && (
                    <p style={{ color: "red" }}>
                      Please enter total no. of funded projects (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
                {/* Amount  */}
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="research_amount_ongoing_funded_projects"
                >
                  <Form.Label>Amount (INR)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Number of citations (in last three years)"
                    type="number"
                    {...register("research_amount_ongoing_funded_projects", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_amount_ongoing_funded_projects && (
                    <p style={{ color: "red" }}>
                      Please enter amount of funds (in last three years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              {/* No. of conferences, seminars, workshops, training programmes (in last three years) */}
              <hr />
              <p>
                <b>
                  No. of conferences, seminars, workshops, training programmes
                  (in last three years)
                </b>
              </p>
              <hr />
              <p>Presented at</p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_presented_total"
                >
                  <Form.Label>Total (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Total"
                    type="number"
                    {...register("research_presented_total", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_presented_total && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes present in (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
                {/* National */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_presented_national"
                >
                  <Form.Label>National (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="National"
                    type="number"
                    {...register("research_presented_national", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_presented_national && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes present (national) in (in
                      last three years)
                    </p>
                  )}
                </Form.Group>
                {/* International */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_presented_international"
                >
                  <Form.Label>International (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="International"
                    type="number"
                    {...register("research_presented_international", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_presented_international && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes present (international) in
                      (in last three years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>Attended</p>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="research_attended_total">
                  <Form.Label>Total (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Total"
                    type="number"
                    {...register("research_attended_total", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_attended_total && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes attended in (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
                {/* National */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_attended_national"
                >
                  <Form.Label>National (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="National"
                    type="number"
                    {...register("research_attended_national", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_attended_national && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes attended (national) in (in
                      last three years)
                    </p>
                  )}
                </Form.Group>
                {/* International */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_attended_international"
                >
                  <Form.Label>International (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="International"
                    type="number"
                    {...register("research_attended_international", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_attended_international && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes attended (international) in
                      (in last three years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              <hr />
              <p>Organized</p>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_organized_total"
                >
                  <Form.Label>Total (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="Total"
                    type="number"
                    {...register("research_organized_total", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_organized_total && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes organized in (in last three
                      years)
                    </p>
                  )}
                </Form.Group>
                {/* National */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_organized_national"
                >
                  <Form.Label>National (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="National"
                    type="number"
                    {...register("research_organized_national", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_organized_national && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes organized (national) in (in
                      last three years)
                    </p>
                  )}
                </Form.Group>
                {/* International */}
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="research_organized_international"
                >
                  <Form.Label>International (No.)</Form.Label>
                  <Form.Control
                    size="sm"
                    placeholder="International"
                    type="number"
                    {...register("research_organized_international", {
                      maxLength: 15,
                    })}
                  />
                  {errors.research_organized_international && (
                    <p style={{ color: "red" }}>
                      Please enter total number of conferences, seminars,
                      workshops, training programmes organized (international)
                      in (in last three years)
                    </p>
                  )}
                </Form.Group>
              </Row>
              {/* Research Guidance (in last three years) */}
              <hr />
              <p>
                <b>Research Guidance (in last three years)</b>
              </p>
              <hr />
              <p>Successfully Completed</p>
              <div className="container border rounded-2">
                <p>Independent</p>
                {/* M Phil. Equivalent (No.) */}
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_completed_independent_mphil"
                  >
                    <Form.Label>M Phil. Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="M Phil. Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_completed_independent_mphil",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_completed_independent_mphil && (
                      <p style={{ color: "red" }}>
                        Please enter total number of m phil. equivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                  {/* PhD Equivalent (No.) */}
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_completed_independent_phd"
                  >
                    <Form.Label>PhD Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="PhD Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_completed_independent_phd",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_completed_independent_phd && (
                      <p style={{ color: "red" }}>
                        Please enter total number of phd quivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                </Row>
                <hr />
                <p>As Co-supervisor</p>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_completed_supervisor_mphil"
                  >
                    <Form.Label>M Phil. Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="M Phil. Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_completed_supervisor_mphil",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_completed_supervisor_mphil && (
                      <p style={{ color: "red" }}>
                        Please enter total number of m phil. equivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                  {/* PhD Equivalent (No.) */}
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_completed_supervisor_phd"
                  >
                    <Form.Label>PhD Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="PhD Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_completed_supervisor_phd",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_completed_supervisor_phd && (
                      <p style={{ color: "red" }}>
                        Please enter total number of phd quivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                </Row>
              </div>
              {/* Under Supervision */}
              <hr />
              <p>Under Supervision</p>
              <div className="container border rounded-2">
                <p>Independent</p>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_supervision_independent_mphil"
                  >
                    <Form.Label>M Phil. Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="M Phil. Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_supervision_independent_mphil",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_supervision_independent_mphil && (
                      <p style={{ color: "red" }}>
                        Please enter total number of m phil. equivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                  {/* PhD Equivalent (No.) */}
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_supervision_independent_phd"
                  >
                    <Form.Label>PhD Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="PhD Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_supervision_independent_phd",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_supervision_independent_phd && (
                      <p style={{ color: "red" }}>
                        Please enter total number of phd quivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                </Row>
                <hr />
                <p>As Co-supervisor</p>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_supervision_supervisor_mphil"
                  >
                    <Form.Label>M Phil. Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="M Phil. Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_supervision_supervisor_mphil",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_supervision_supervisor_mphil && (
                      <p style={{ color: "red" }}>
                        Please enter total number of m phil. equivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                  {/* PhD Equivalent (No.) */}
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="research_guidance_supervision_supervisor_phd"
                  >
                    <Form.Label>PhD Equivalent (No.)</Form.Label>
                    <Form.Control
                      size="sm"
                      placeholder="PhD Equivalent (No.)"
                      type="number"
                      {...register(
                        "research_guidance_supervision_supervisor_phd",
                        {
                          maxLength: 15,
                        }
                      )}
                    />
                    {errors.research_guidance_supervision_supervisor_phd && (
                      <p style={{ color: "red" }}>
                        Please enter total number of phd quivalent research
                        guidance
                      </p>
                    )}
                  </Form.Group>
                </Row>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/*This is part 8  */}
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              8.Books Authored/Co-Authored/Edited/Co-Edited (in last three
              years)
            </Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                label="if Yes?"
                onClick={handlePart8}
              ></Form.Check>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  controlId="book_details"
                  disabled={part8}
                >
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows={1}
                    disabled={part8}
                    {...register("book_details", {
                      maxLength: 500,
                    })}
                  />
                  {errors.book_details && (
                    <p style={{ color: "red" }}>
                      Please enter the book details
                    </p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="book_isbn">
                  <Form.Label>ISBN Number</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    rows={3}
                    disabled={part8}
                    {...register("book_isbn", {
                      maxLength: 500,
                    })}
                  />
                  {errors.book_isbn && (
                    <p style={{ color: "red" }}>
                      Please enter the book isbn number
                    </p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="book_written">
                  <Form.Label>Written As</Form.Label>
                  <Form.Select
                    size="sm"
                    type="text"
                    rows={3}
                    disabled={part8}
                    {...register("book_written", {
                    })}
                  >
                    <option value="" />
                    <option value="principal-writer">Principal Writer</option>
                    <option value="co-writer">Co Writer</option>
                  </Form.Select>
                  {errors.book_written && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.book_written.message}
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              9. Patent Details (in last three years)
            </Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                label="if Yes?"
                onClick={handlePart9}
              ></Form.Check>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="3"
                  disabled={part9}
                  controlId="patent_details"
                >
                  <Form.Label>Patent Details</Form.Label>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows={1}
                    disabled={part9}
                    {...register("patent_details", {
                      maxLength: 500,
                    })}
                  />
                  {errors.patent_details && (
                    <p style={{ color: "red" }}>
                      Please enter the patent details
                    </p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="patent_year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    rows={3}
                    disabled={part9}
                    {...register("patent_year", {
                      maxLength: 500,
                    })}
                  />
                  {errors.patent_year && (
                    <p style={{ color: "red" }}>
                      Please enter the patented year
                    </p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="patent_status">
                  <Form.Label>Patent Status</Form.Label>
                  <Form.Select
                    size="sm"
                    type="text"
                    rows={3}
                    disabled={part9}
                    {...register("patent_status", {
                      required: "Please select",
                    })}
                  >
                    <option selected="" disabled="" value="">
                      Choose...
                    </option>
                    <option>Filled</option>
                    <option>Granted</option>
                  </Form.Select>
                  {errors.patent_status && (
                    <p style={{ color: "red" }}>
                      {" "}
                      {errors.patent_status.message}
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              10. Consultancy (in last three years)
            </Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                label="if Yes?"
                onClick={handlePart10}
              ></Form.Check>
              <Form.Group>
                <Table responsive="sm">
                  <thead>
                    <td>#</td>
                    <td>No. assignments</td>
                    <td>for Amount (in INR)</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Completed</td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part10}
                        />
                      </td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part10}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>ongoing</td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part10}
                        />
                      </td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part10}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>11. Peer Recognition / Awards</Accordion.Header>
            <Accordion.Body>
              <Form.Check
                type="checkbox"
                label="if Yes?"
                onClick={handlePart11}
              ></Form.Check>
              <Form.Group>
                <Table responsive="sm">
                  <thead>
                    <td>Awards / Honors</td>
                    <td>Agency</td>
                    <td>Year</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part11}
                          {...register("peerRecognition_awards", {
                            maxLength: 500,
                          })}
                        />
                        {errors.peerRecognition_awards && (
                          <p style={{ color: "red" }}>
                            Please enter the necessary details
                          </p>
                        )}
                      </td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part11}
                          {...register("peerRecognition_agency", {
                            maxLength: 500,
                          })}
                        />
                        {errors.peerRecognition_agency && (
                          <p style={{ color: "red" }}>
                            Please enter the necessary details
                          </p>
                        )}
                      </td>
                      <td>
                        <Form.Control
                          size="sm"
                          type="text"
                          rows={3}
                          disabled={part11}
                          {...register("peerRecognition_year", {
                            maxLength: 500,
                          })}
                        />
                        {errors.peerRecognition_year && (
                          <p style={{ color: "red" }}>
                            Please enter the necessary details
                          </p>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>12. Other Information</Accordion.Header>
            <Accordion.Body>
              <Row className="mb-3">
                {/* <Form.Group
                  as={Col}
                  md="12"
                  {...register("previoussalary", {
                    required: true,
                  })}
                >
                  <Form.Label>
                    Present / Last Drawn salary (monthly in INR)
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Amount" />
                  {errors.previoussalary && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  {...register("noticeperiod", {
                    required: true,
                  })}
                >
                  <Form.Label>Notice period (in Days)</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Days" />
                  {errors.noticeperiod && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group> */}

                <Form.Group as={Col} md="12">
                  <Form.Label>Do You Know anyone in MUJ ?</Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="Yes"
                    value={"Yes"}
                    name={"knowanyone"}
                    // {...register("knowanyone", {
                    //   required: true,
                    // })}
                    onClick={handleKnowAnyone}
                  ></Form.Check>
                  {/* <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"knowanyone"}
                    {...register("knowanyone", {
                      required: true,
                    })}
                  ></Form.Check> */}
                  {errors.knowanyone && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                {knowanyone&&<>
                <Form.Group as={Col} md="3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Designation"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Department"
                  />
                </Form.Group>
               </> }
                <Form.Group as={Col} md="12">
                  <Form.Label>
                    Have you ever been interviewed in MUJ earlier?
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value={"Yes"}
                    name={"interviewed"}
                    {...register("interviewed", {
                      required: true,
                    })}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"interviewed"}
                    {...register("interviewed", {
                      required: true,
                    })}
                  ></Form.Check>
                  {errors.interviewed && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Given Offer to join?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value={"Yes"}
                    name={"offerjoined"}
                    {...register("offerjoined", {
                      required: true,
                    })}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"offerjoined"}
                    {...register("offerjoined", {
                      required: true,
                    })}
                  ></Form.Check>
                  {errors.offerjoined && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Joined?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value={"Yes"}
                    name={"joined"}
                    {...register("joined", {
                      required: true,
                    })}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"joined"}
                    {...register("joined", {
                      required: true,
                    })}
                  ></Form.Check>
                  {errors.joined && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>
                    Have you ever been punished during your service or convicted
                    by a court of law?
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value={"Yes"}
                    name={"convicted"}
                    {...register("convicted", {
                      required: true,
                    })}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"convicted"}
                    {...register("convicted", {
                      required: true,
                    })}
                  ></Form.Check>
                  {errors.convicted && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>
                    <u>is Yes, Please Explain</u>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Explain" />
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>
                    Do you have any case pending against you in court of law?
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value={"Yes"}
                    name={"pendingcases"}
                    id={"pendingcases"}
                    {...register("pendingcases", {
                      required: true,
                    })}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="No"
                    value={"No"}
                    name={"pendingcases"}
                    id={"pendingcases"}
                    {...register("pendingcases", {
                      required: true,
                    })}
                  ></Form.Check>
                  {errors.pendingcases && (
                    <p style={{ color: "red" }}>Please enter</p>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>
                    <u>is Yes, Please Explain</u>
                  </Form.Label>
                  <Form.Control size="sm" type="text" placeholder="Explain" />
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
