import React from "react";
// import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const PartSevenDetails = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
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
              value={props?.data?.research_orcid}
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
              value={props?.data?.research_scopus}
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
              value={props?.data?.research_webofscience}
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
              value={props?.data?.research_cif}
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
              value={props?.data?.research_nop_total}
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
          <Form.Group as={Col} md="3" controlId="research_nop_ugc_care_list">
            <Form.Label>As per UGC Care List</Form.Label>
            <Form.Control
              size="sm"
              placeholder="As per UGC Care List"
              value={props?.data?.research_nop_ugc_care_list}
              type="number"
              {...register("research_nop_ugc_care_list", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_ugc_care_list && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published as per UGC
                care list
              </p>
            )}
          </Form.Group>
          {/* SCI */}
          <Form.Group as={Col} md="3" controlId="research_nop_sci">
            <Form.Label>SCI</Form.Label>
            <Form.Control
              size="sm"
              placeholder="SCI"
              value={props?.data?.research_nop_sci}
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
          <Form.Group as={Col} md="3" controlId="research_nop_web_science">
            <Form.Label>Web of Science</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Web of Science"
              value={props?.data?.research_nop_web_science}
              type="number"
              {...register("research_nop_web_science", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_web_science && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published web of
                science
              </p>
            )}
          </Form.Group>
          {/* Google Scholar */}
          <Form.Group as={Col} md="3" controlId="research_nop_google_scholar">
            <Form.Label>Google Scholar</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Google Scholar"
              value={props?.data?.research_nop_google_scholar}
              type="number"
              {...register("research_nop_google_scholar", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_google_scholar && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published on google
                scholar
              </p>
            )}
          </Form.Group>
          {/* Scopus */}
          <Form.Group as={Col} md="3" controlId="research_nop_scopus">
            <Form.Label>Scopus</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Scopus"
              value={props?.data?.research_nop_scopus}
              type="number"
              {...register("research_nop_scopus", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_scopus && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published on scopus
              </p>
            )}
          </Form.Group>
        </Row>
        {/* Research Paper Published in the last three years  */}
        <hr />
        <p>Research Paper Published in the last three years</p>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="research_nop_three_total">
            <Form.Label>Total</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Total"
              value={props?.data?.research_nop_three_total}
              type="number"
              {...register("research_nop_three_total", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_three_total && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published in last
                three years
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
              value={props?.data?.research_nop_three_ugc_care_list}
              type="number"
              {...register("research_nop_three_ugc_care_list", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_three_ugc_care_list && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published as per UGC
                care list
              </p>
            )}
          </Form.Group>
          {/* SCI */}
          <Form.Group as={Col} md="3" controlId="research_nop_three_sci">
            <Form.Label>SCI</Form.Label>
            <Form.Control
              size="sm"
              placeholder="SCI"
              value={props?.data?.research_nop_three_sci}
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
              value={props?.data?.research_nop_three_web_science}
              type="number"
              {...register("research_nop_three_web_science", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_three_web_science && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published web of
                science
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
              value={props?.data?.research_nop_three_google_scholar}
              {...register("research_nop_three_google_scholar", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_three_google_scholar && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published on google
                scholar
              </p>
            )}
          </Form.Group>
          {/* Scopus */}
          <Form.Group as={Col} md="3" controlId="research_nop_three_scopus">
            <Form.Label>Scopus</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Scopus"
              value={props?.data?.research_nop_three_scopus}
              type="number"
              {...register("research_nop_three_scopus", {
                maxLength: 15,
              })}
            />
            {errors.research_nop_three_scopus && (
              <p style={{ color: "red" }}>
                Please enter total number of research paper published on scopus
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
          <Form.Group as={Col} md="6" controlId="research_number_citations">
            <Form.Control
              size="sm"
              placeholder="Number of citations (in last three years)"
              value={props?.data?.research_number_citations}
              type="number"
              {...register("research_number_citations", {
                maxLength: 15,
              })}
            />
            {errors.research_number_citations && (
              <p style={{ color: "red" }}>
                Please enter total number of citations (in last three years)
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
              value={props?.data?.research_completed_funded_projects}
              {...register("research_completed_funded_projects", {
                maxLength: 15,
              })}
            />
            {errors.research_completed_funded_projects && (
              <p style={{ color: "red" }}>
                Please enter total no. of funded projects (in last three years)
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
              value={props?.data?.research_amount_completed_funded_projects}
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
              value={props?.data?.research_ongoing_funded_projects}
              {...register("research_ongoing_funded_projects", {
                maxLength: 15,
              })}
            />
            {errors.research_ongoing_funded_projects && (
              <p style={{ color: "red" }}>
                Please enter total no. of funded projects (in last three years)
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
              value={props?.data?.research_ongoing_funded_projects}
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
            No. of conferences, seminars, workshops, training programmes (in
            last three years)
          </b>
        </p>
        <hr />
        <p>Presented at</p>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="research_presented_total">
            <Form.Label>Total (No.)</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Total"
              value={props?.data?.research_presented_total}
              type="number"
              {...register("research_presented_total", {
                maxLength: 15,
              })}
            />
            {errors.research_presented_total && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes present in (in last three years)
              </p>
            )}
          </Form.Group>
          {/* National */}
          <Form.Group as={Col} md="4" controlId="research_presented_national">
            <Form.Label>National (No.)</Form.Label>
            <Form.Control
              size="sm"
              placeholder="National"
              value={props?.data?.research_presented_national}
              type="number"
              {...register("research_presented_national", {
                maxLength: 15,
              })}
            />
            {errors.research_presented_national && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes present (national) in (in last three years)
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
              value={props?.data?.research_presented_international}
              type="number"
              {...register("research_presented_international", {
                maxLength: 15,
              })}
            />
            {errors.research_presented_international && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes present (international) in (in last three
                years)
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
              value={props?.data?.research_attended_total}
              type="number"
              {...register("research_attended_total", {
                maxLength: 15,
              })}
            />
            {errors.research_attended_total && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes attended in (in last three years)
              </p>
            )}
          </Form.Group>
          {/* National */}
          <Form.Group as={Col} md="4" controlId="research_attended_national">
            <Form.Label>National (No.)</Form.Label>
            <Form.Control
              size="sm"
              placeholder="National"
              type="number"
              value={props?.data?.research_attended_national}
              {...register("research_attended_national", {
                maxLength: 15,
              })}
            />
            {errors.research_attended_national && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes attended (national) in (in last three years)
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
              value={props?.data?.research_attended_international}
              type="number"
              {...register("research_attended_international", {
                maxLength: 15,
              })}
            />
            {errors.research_attended_international && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes attended (international) in (in last three
                years)
              </p>
            )}
          </Form.Group>
        </Row>
        <hr />
        <p>Organized</p>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="research_organized_total">
            <Form.Label>Total (No.)</Form.Label>
            <Form.Control
              size="sm"
              placeholder="Total"
              type="number"
              value={props?.data?.research_organized_total}
              {...register("research_organized_total", {
                maxLength: 15,
              })}
            />
            {errors.research_organized_total && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes organized in (in last three years)
              </p>
            )}
          </Form.Group>
          {/* National */}
          <Form.Group as={Col} md="4" controlId="research_organized_national">
            <Form.Label>National (No.)</Form.Label>
            <Form.Control
              size="sm"
              placeholder="National"
              type="number"
              value={props?.data?.research_organized_national}
              {...register("research_organized_national", {
                maxLength: 15,
              })}
            />
            {errors.research_organized_national && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes organized (national) in (in last three
                years)
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
              value={props?.data?.research_organized_international}
              {...register("research_organized_international", {
                maxLength: 15,
              })}
            />
            {errors.research_organized_international && (
              <p style={{ color: "red" }}>
                Please enter total number of conferences, seminars, workshops,
                training programmes organized (international) in (in last three
                years)
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
                value={
                  props?.data?.research_guidance_completed_independent_mphil
                }
                {...register("research_guidance_completed_independent_mphil", {
                  maxLength: 15,
                })}
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
                value={props?.data?.research_guidance_completed_independent_phd}
                {...register("research_guidance_completed_independent_phd", {
                  maxLength: 15,
                })}
              />
              {errors.research_guidance_completed_independent_phd && (
                <p style={{ color: "red" }}>
                  Please enter total number of phd quivalent research guidance
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
                value={
                  props?.data?.research_guidance_completed_supervisor_mphil
                }
                {...register("research_guidance_completed_supervisor_mphil", {
                  maxLength: 15,
                })}
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
                value={props?.data?.research_guidance_completed_supervisor_phd}
                {...register("research_guidance_completed_supervisor_phd", {
                  maxLength: 15,
                })}
              />
              {errors.research_guidance_completed_supervisor_phd && (
                <p style={{ color: "red" }}>
                  Please enter total number of phd quivalent research guidance
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
                value={
                  props?.data?.research_guidance_supervision_independent_mphil
                }
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
                value={
                  props?.data?.research_guidance_supervision_independent_phd
                }
                {...register("research_guidance_supervision_independent_phd", {
                  maxLength: 15,
                })}
              />
              {errors.research_guidance_supervision_independent_phd && (
                <p style={{ color: "red" }}>
                  Please enter total number of phd quivalent research guidance
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
                value={
                  props?.data?.research_guidance_supervision_supervisor_mphil
                }
                {...register("research_guidance_supervision_supervisor_mphil", {
                  maxLength: 15,
                })}
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
                value={
                  props?.data?.research_guidance_supervision_supervisor_phd
                }
                {...register("research_guidance_supervision_supervisor_phd", {
                  maxLength: 15,
                })}
              />
              {errors.research_guidance_supervision_supervisor_phd && (
                <p style={{ color: "red" }}>
                  Please enter total number of phd quivalent research guidance
                </p>
              )}
            </Form.Group>
          </Row>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartSevenDetails;
