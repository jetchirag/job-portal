import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const PartThree = () => {
  const [aq_higher_secondary_country, setaq_higher_secondary_country] =
    useState("");
  const [aq_graduation_country, setaq_graduation_country] = useState("");
  const [aq_post_graduation_country, setaq_post_graduation_country] =
    useState("");
  const [aq_mphil_country, setaq_mphil_country] = useState("");
  const [aq_phd_country, setaq_phd_country] = useState("");
  const [aq_post_doctoral_country, setaq_post_doctoral_country] = useState("");
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
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
            size="sm"
          >
            {/* Academic Qualification Higher Seconday Country  */}
            <Form.Label>Country</Form.Label>
            <CountryDropdown
              value={aq_higher_secondary_country}
              onChange={(val) => setaq_higher_secondary_country(val)}
              className={"form-control form-control-sm"}
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
              <p style={{ color: "red" }}>Please enter your school name</p>
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
              <p style={{ color: "red" }}>Please enter your passing year</p>
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
              className="form-control-sm form-control"
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
              <p style={{ color: "red" }}> {errors.graduation_mode.message}</p>
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
              <p style={{ color: "red" }}>Please enter your college name</p>
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
              <p style={{ color: "red" }}>Please enter your graduation year</p>
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
              <p style={{ color: "red" }}>Please enter your course name</p>
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
          <Form.Group as={Col} md="3" controlId="aq_post_graduate_country">
            {/* Academic Qualification Post Graduate Country  */}
            <Form.Label>Country</Form.Label>
            <CountryDropdown
              value={aq_post_graduation_country}
              onChange={(val) => setaq_post_graduation_country(val)}
              className="form-control-sm form-control"
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
          <Form.Group as={Col} md="3" controlId="post_graduation_institute">
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
              <p style={{ color: "red" }}>Please enter your college name</p>
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
              <p style={{ color: "red" }}>Please enter your course name</p>
            )}
          </Form.Group>
          {/* Graduation Division Details  */}
          <Form.Group as={Col} md="3" controlId="post_graduation_division">
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
          <Form.Group as={Col} md="3" controlId="post_graduation_percentage">
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
              className="form-control-sm form-control"
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
              <p style={{ color: "red" }}>Please enter your college name</p>
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
              <p style={{ color: "red" }}>Please enter your m phil year</p>
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
              <p style={{ color: "red" }}> {errors.mphil_division.message}</p>
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
              className="form-control-sm form-control"
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
              <p style={{ color: "red" }}>Please enter your college name</p>
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
              <p style={{ color: "red" }}>Please enter your completion year</p>
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
            <Form.Label>If pursuing, teaching experience during PhD</Form.Label>
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
          <Form.Group as={Col} md="3" controlId="phd_anti_completion_year">
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
          <Form.Group as={Col} md="3" controlId="aq_post_doctoral_country">
            {/* Academic Qualification Post Doctoral Country  */}
            <Form.Label>Country</Form.Label>
            <CountryDropdown
              value={aq_post_doctoral_country}
              onChange={(val) => setaq_post_doctoral_country(val)}
              className="form-control-sm form-control"
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
              <p style={{ color: "red" }}>Please enter your college name</p>
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
              <p style={{ color: "red" }}>Please enter your course name</p>
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
          <Form.Group as={Col} md="3" controlId="post_doctoral_percentage">
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
  );
};

export default PartThree;
