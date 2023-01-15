import React from "react";

const PartTen = () => {
  return (
    <>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          <strong>
            Present / Last Drawn salary <br />
            (monthly in INR)
          </strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          <strong>
            Notice period <br /> (in Days)
          </strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <br />
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Do you know anyone in Manipal?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="knowinmanipal"
            value="knowinmanipalyes"
            id="knowinmanipalyes"
          />
          <label className="form-check-label" htmlFor="knowinmanipalyes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="knowinmanipal"
            value="knowinmanipalno"
            id="knowinmanipalno"
          />
          <label className="form-check-label" htmlFor="knowinmanipalno">
            No
          </label>
        </div>
      </div>
      <p>
        <b>If Yes?</b>
      </p>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Department
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Designation
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Campus
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-12">
        <button className="btn btn-primary" type="button">
          Add More
        </button>
      </div>
      <hr />
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Have you been interviewed
          <br /> in Manipal earlier?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="interviewinmanipal"
            value="interviewinmanipalyes"
            id="interviewinmanipalyes"
          />
          <label className="form-check-label" htmlFor="interviewinmanipalyes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="interviewinmanipal"
            value="interviewinmanipalno"
            id="interviewinmanipalno"
          />
          <label className="form-check-label" htmlFor="interviewinmanipalno">
            No
          </label>
        </div>
      </div>
      <p>
        <b>If Yes?</b>
      </p>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Campus
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp;
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Given Offer to Join
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="offerinmanipal"
            value="offerinmanipalyes"
            id="offerinmanipalyes"
          />
          <label className="form-check-label" htmlFor="offerinmanipalyes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="offerinmanipal"
            value="offerinmanipalno"
            id="offerinmanipalno"
          />
          <label className="form-check-label" htmlFor="offerinmanipalno">
            No
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Joined
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="joininmanipal"
            value="joininmanipalyes"
            id="joininmanipalyes"
          />
          <label className="form-check-label" htmlFor="joininmanipalyes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="joininmanipal"
            value="joininmanipalno"
            id="joininmanipalno"
          />
          <label className="form-check-label" htmlFor="knowinmanipalno">
            No
          </label>
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          If Joined, Date From
        </label>
        <input
          type="date"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp;
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          Date To
        </label>
        <input
          type="date"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <div className="col-md-12">
        <button className="btn btn-primary" type="button">
          Add More
        </button>
      </div>
      <hr />
    </>
  );
};

export default PartTen;
