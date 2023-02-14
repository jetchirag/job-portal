import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./ApplicationDetails.css";
import { Button } from "@mui/material";
import FormDetails from "./FormDetails";
import Modal from "../modal/Modal";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [Reject, setReject] = useState(false);
  const [Accept, setAccept] = useState(false);

  const handleClose = () => {
    setReject(false);
    setAccept(false);
  };

  const rejectApplication = async () => {
    try {
      const response = await fetch(
        // `http://jobmuj.projects.chirag.sh:3000/applications/${id}/reject`,
        `http://localhost:3000/applications/reject/${id}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setReject(true);
      } else {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(`${err.message}`);
    }
  };

  const acceptApplication = async () => {
    try {
      const response = await fetch(
        // `http://jobmuj.projects.chirag.sh:3000/applications/${id}/reject`,
        `http://localhost:3000/applications/accept/${id}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setAccept(true);
      } else {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (err) {
      console.error(`${err.message}`);
    }
  };

  useEffect(() => {
    const FetchingApplicant = async () => {
      try {
        await fetch(
          `http://localhost:3000/applications/${id}`,
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
            setData(val);
            console.log(val);
          });
      } catch (err) {
        console.error(err.message);
      }
    };
    FetchingApplicant();
  }, [id]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="heading">
        <p>Job Application Details</p>
      </div>
      <Modal
        handleClose={handleClose}
        show={Reject}
        title="Application Rejected ❌"
        body="This application status is marked rejectex"
      />
      <Modal
        handleClose={handleClose}
        show={Accept}
        title="Application Accepted ✅"
        body="This application status is marked accepted"
      />
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", marginTop: "3%", marginLeft: "6%" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.photo}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {data?.applicant?.firstName} {data?.applicant?.lastName}
              </h5>
              <p className="card-text">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => openInNewTab(`${data.resume}`)}
                >
                  Resume
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "2px" }}
                  onClick={() => openInNewTab(`${data.photo}`)}
                >
                  Photo
                </Button>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Applied in Faculty of Engineering{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FormDetails
        data={data}
        reject={rejectApplication}
        accept={acceptApplication}
      />
    </>
  );
};
export default ApplicationsDetails;
