import React from "react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PartFive = () => {
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
  }, []);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // const [academicExperience_country, setacademicExperience_country] =
  //   useState("");
  // const [nonAcademicExperience_country, setnonAcademicExperience_country] =
  //   useState("");
  const [acad, setAcad] = useState(["set"]);
  const [nonAcad, setNonAcad] = useState(["set"]);

  const addAcad = () => {
    setAcad([...acad, "set"]);
  };
  const addNonAcad = () => {
    setNonAcad([...nonAcad, "set"]);
  };

  const removeAcad = () => {
    const copyArr = [...acad];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setAcad(copyArr);
  };
  const removeNonAcad = () => {
    const copyArr = [...nonAcad];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setNonAcad(copyArr);
  };

  return (
    <Accordion.Item eventKey="4">
      <Accordion.Header>5. Experience</Accordion.Header>
      <Accordion.Body>
        <p>
          <b>Academic</b>
        </p>
        {acad.map(() => {
          return (
            <Row className="mb-3">
              {/* Nature of job  */}
              <Form.Group as={Col} md="2" controlId="academicExperience_mode">
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
                md="2"
                controlId="academicExperience_country"
              >
                <Form.Label>Country</Form.Label>
                <Form.Select
                  isInvalid={errors.academicExperience_country}
                  size="sm"
                  {...register("academicExperience_country", {
                    required: false,
                  })}
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
              <Form.Group as={Col} md="2" controlId="academicExperience_state">
                <Form.Label>State</Form.Label>

                <Form.Control
                  isInvalid={errors.academicExperience_state}
                  size="sm"
                  placeholder="State"
                  type="text"
                  {...register("academicExperience_state", {
                    required: false,
                  })}
                />
              </Form.Group>
              {/* City Details  */}
              <Form.Group as={Col} md="2" controlId="academicExperience_city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  isInvalid={errors.academicExperience_city}
                  size="sm"
                  placeholder="City"
                  type="text"
                  {...register("academicExperience_city", {
                    required: false,
                  })}
                />
              </Form.Group>

              {/* University  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="academicExperience_university"
              >
                <Form.Label>University</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="University"
                  type="text"
                  {...register("academicExperience_university", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* College Name  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="academicExperience_college"
              >
                <Form.Label>College</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="College Name"
                  type="text"
                  {...register("academicExperience_college", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Postion of work  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="academicExperience_position"
              >
                <Form.Label>Position</Form.Label>
                <Form.Select
                  size="sm"
                  {...register("academicExperience_position", {
                    // required: 'Please select the position you worked in',
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
                  <option value="research-assistant">Research Assistant</option>
                </Form.Select>
              </Form.Group>
              {/* Academic Domain Details  */}
              <Form.Group as={Col} md="2" controlId="academicExperience_domain">
                <Form.Label>Academic Domain</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Academic Domain"
                  type="text"
                  {...register("academicExperience_domain", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Working From Date Details  */}
              <Form.Group
                as={Col}
                md="2"
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
              <Form.Group as={Col} md="2" controlId="academicExperience_dateto">
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
          );
        })}
        <button
          type="button"
          onClick={addAcad}
          className="btn btn-outline-success"
        >
          Add New
        </button>{" "}
        <button
          type="button"
          onClick={removeAcad}
          className="btn btn-outline-danger"
        >
          Remove Last
        </button>
        <hr />
        <p>
          <b>Administrative & Non Academic</b>
        </p>
        {nonAcad.map(() => {
          return (
            <Row className="mb-3">
              {/* Type of job  */}
              <Form.Group as={Col} md="2" controlId="academicExperience_type">
                <Form.Label>Type of Job</Form.Label>
                <Form.Select
                  size="sm"
                  {...register("academicExperience_type", {
                    // required: "Please select the nature of your job",
                  })}
                >
                  <option selected="" disabled="" value="">
                    Choose...
                  </option>
                  <option value="administrative">Administrative</option>
                  <option value="non-academic">Non-Academic</option>
                </Form.Select>
                {errors.academicExperience_type && (
                  <p style={{ color: "red" }}>
                    {" "}
                    {errors.academicExperience_type.message}
                  </p>
                )}
              </Form.Group>
              {/* Nature of job  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_mode"
              >
                <Form.Label>Nature of Job</Form.Label>
                <Form.Select
                  size="sm"
                  {...register("nonAcademicExperience_mode", {
                    // required: 'Please select the nature of your job',
                  })}
                >
                  <option selected="" disabled="" value="">
                    Choose...
                  </option>
                  <option value="regular">Regular</option>
                  <option value="part-time">Part-Time</option>
                </Form.Select>
              </Form.Group>
              {/* Country of job  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_country"
              >
                <Form.Label>Country</Form.Label>
                <Form.Select
                  isInvalid={errors.nonAcademicExperience_country}
                  size="sm"
                  {...register("nonAcademicExperience_country", {
                    required: false,
                  })}
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
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_state"
              >
                <Form.Label>State</Form.Label>

                <Form.Control
                  isInvalid={errors.nonAcademicExperience_state}
                  size="sm"
                  placeholder="State"
                  type="text"
                  {...register("nonAcademicExperience_state", {
                    required: false,
                  })}
                />
              </Form.Group>
              {/* City Details  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_city"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  isInvalid={errors.nonAcademicExperience_city}
                  size="sm"
                  placeholder="City"
                  type="text"
                  {...register("nonAcademicExperience_city", {
                    required: false,
                  })}
                />
              </Form.Group>

              {/* Organization Name  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_organization"
              >
                <Form.Label>Organization</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Organization Name"
                  type="text"
                  {...register("nonAcademicExperience_organization", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Designation Name  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_designation"
              >
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Designation Name"
                  type="text"
                  {...register("nonAcademicExperience_designation", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Department Name  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_department"
              >
                <Form.Label>Department</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="Department Name"
                  type="text"
                  {...register("nonAcademicExperience_department", {
                    // required: true,
                    maxLength: 100,
                  })}
                />
              </Form.Group>
              {/* Working From Date Details  */}
              <Form.Group
                as={Col}
                md="2"
                controlId="nonAcademicExperience_datefrom"
              >
                <Form.Label>Date From</Form.Label>
                <Form.Control
                  size="sm"
                  placeholder="DD/MM/YYYY"
                  type="date"
                  {...register("nonAcademicExperience_datefrom")}
                />
              </Form.Group>
              {/* Working To Date Details  */}
              <Form.Group
                as={Col}
                md="2"
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
          );
        })}
        <button
          type="button"
          onClick={addNonAcad}
          className="btn btn-outline-success"
        >
          Add New
        </button>{" "}
        <button
          type="button"
          onClick={removeNonAcad}
          className="btn btn-outline-danger"
        >
          Remove Last
        </button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartFive;
