import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

// import Card from "react-bootstrap/Card";
import "./ApplicationDetails.css";
// import Form from "../Form";
import { Button } from "@mui/material";
import FormComponent from "../FormComponent";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const rejectApplication = async () => {
    try {
      const response = await fetch(
        // `http://jobmuj.projects.chirag.sh:3000/applications/${id}/reject`,
        `http://65.109.166.43:3000/applications/${id}/reject`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(`${err.message}`);
    }
  };

  const FetchingApplicant = useCallback(async () => {
    try {
      await fetch(
       
        `http://65.109.166.43:3000/applications/${id}`,
        // NEW - add a Content-Type header
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          const objectprefix = val.applicant;
          const result = {
            fname: objectprefix.firstName,
            lname: objectprefix.lastName,
            name: objectprefix.firstName + " " + objectprefix.lastName,
            dob: objectprefix.dob,
            gender: objectprefix.dob,
            religion: objectprefix.religion,
            marital: objectprefix.marital_status,
            mobile: objectprefix.mobile,
            email: objectprefix.email,
            jobType: val.jobType,
            faculty: val.faculty,
            school: val.school,
            dept: val.department,
            acaddom: val.acad_domain,
            cr_country: val.cr_country,
            cr_state: val.cr_state,
            cr_city: val.cr_city,
            native_country: val.native_country,
            native_state: val.native_state,
            aadhaar_card: val.aadhaar_card,
            pan_card: val.pan_card,
            aq_higher_secondary: val.aq_higher_secondary.country,
            aq_graduation: val.aq_graduation,
            aq_post_graduation: val.aq_post_graduation,
            aq_mphil: val.aq_mphil,
            aq_phd: val.aq_phd,
            aq_post_doctoral: val.aq_post_doctoral,
            academicExperience: val.academicExperience,
            fellowships: val.fellowships,
            books: val.books,
            peerRecognition: val.peerRecognition,
            photo: val.photo,
            resume: val.resume,
          };
          setData(result);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [id]);
  useEffect(() => {
    FetchingApplicant();
  }, [FetchingApplicant]);


  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="card mb-3" style={{maxWidth: "540px", marginTop:'3%', marginLeft:'13%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.photo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">
               <Button variant="contained" color="primary"  onClick={() => openInNewTab(`${data.resume}`)}>Resume</Button>
               <Button variant="contained" color="primary" style={{marginLeft:'2px'}} onClick={() => openInNewTab(`${data.photo}`)}>Photo</Button>
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
   
        <FormComponent/>
     
   
    </>
  );
};
export default ApplicationsDetails;
