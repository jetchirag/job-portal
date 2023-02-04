import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

// import Card from "react-bootstrap/Card";
import "./ApplicationDetails.css";
// import Form from "../Form";
import { Button } from "@mui/material";
import FormComponent from "../FormComponent";
import FormDetails from "./FormDetails";

const ApplicationsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const rejectApplication = async () => {
    try {
      const response = await fetch(
        // `http://jobmuj.projects.chirag.sh:3000/applications/${id}/reject`,
        `http://localhost:3000/applications/${id}/reject`,
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
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", marginTop: "3%", marginLeft: "13%" }}
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
              <h5 className="card-title">{data.name}</h5>
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
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FormDetails data={data} />
    </>
  );
};
export default ApplicationsDetails;
