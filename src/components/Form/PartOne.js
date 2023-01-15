import React, { useState } from "react";
import { facultiesList, list } from "./faculties (1)";
const PartOne = (props) => {
  const [faculty, setFaculty] = useState("");
  const [depts, setDepts] = useState("");

  return (
    <>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Job Type
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          required=""
          value={props?.data?.faculty}
        >
          {console.log(faculty)}
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>Academic</option>
          <option>Non Academic</option>
          <option>Administrative</option>
        </select>
        <div className="invalid-feedback">Please select a job type.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Faculty
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          required=""
          value={props?.data?.school}
          onChange={(e) => setFaculty(e.target.value)}
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>

          {list.map((faculty) => {
            return <option>{faculty}</option>;
          })}
        </select>
        <div className="invalid-feedback">Please select a valid faculty.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          School
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          required=""
          value={props?.data?.dept}
          onChange={(e) => setDepts(e.target.value)}
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          {faculty &&
            Object.keys(facultiesList[faculty]).map((dept) => {
              return <option>{dept}</option>;
            })}
        </select>
        <div className="invalid-feedback">Please select a valid school.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Department
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          required=""
          value={props?.data?.acaddom}
        >
          <option selected="" disabled="" value="">
            Choose...
          </option>
          {depts &&
            facultiesList[faculty][depts].map((dept) => {
              return <option>{dept}</option>;
            })}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Nature of Job
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="nature"
            value="Full-Time"
            id="fulltime"
          />
          <label className="form-check-label" htmlFor="fulltime">
            Full-Time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="nature"
            value="Part-Time"
            id="parttime"
          />
          <label className="form-check-label" htmlFor="parttime">
            Part-Time
          </label>
        </div>
      </div>
    </>
  );
};

export default PartOne;
