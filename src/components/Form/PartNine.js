import React from "react";

const PartNine = () => {
  return (
    <>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Patent Detail
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          required=""
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Year
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          required=""
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Patent Status
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
        </select>
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <button className="btn btn-success">Add More</button>
      </div>
    </>
  );
};

export default PartNine;
