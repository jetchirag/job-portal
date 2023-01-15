import React from "react";
import Widget from "./Widget";
import "./dashboard.css";
import Datatable from "./Datatable";
import { useEffect, useCallback, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const FetchingData = useCallback(async () => {
    try {
      await fetch("http://65.109.166.43:3000/applications")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error Connecting to the database");
          }
          return res.json();
        })
        .then((val) => {
          const values = val.results.map((ele) => {
            return {
              firstName: ele.applicant.firstName,
              lastName: ele.applicant.lastName,
              gender: ele.applicant.gender,
              mobile: ele.applicant.mobile,
              email: ele.applicant.email,
              id: ele._id,
              viewCount: ele.viewCount,
              status: ele.status,
            };
          });
          setData(values);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, []);
  useEffect(() => {
    FetchingData();
  }, [FetchingData]);

  return (
    <React.Fragment>
      {/* <div className="widgets">
        <Widget title="Users" counter="100" />
        <Widget title="Teaching Applicants" counter="500" />
        <Widget title="Non Teaching Applicants" counter="250" />
        <Widget title="Total Applicants" counter="750" />
      </div> */}
      <div className="listContainter">
        <Datatable data={data} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
