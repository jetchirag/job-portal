import React, { useState } from "react";

const PartThree = () => {
  const [gradData, setGradData] = useState(["Hello"]);
  const [postGradData, setPostGradData] = useState(["Hello"]);
  const [mPhillData, setMPhillData] = useState(["Hello"]);
  const [phdData, setPHDData] = useState(["Hello"]);
  const [postDData, setPostDData] = useState(["Hello"]);
  const addHello1 = (e) => {
    console.log(gradData);
    e.preventDefault();
    setGradData([...gradData, "Hello"]);
  };
  const addHello2 = (e) => {
    e.preventDefault();
    setPostGradData([...postGradData, "Hello"]);
  };
  const addHello3 = (e) => {
    e.preventDefault();
    setMPhillData([...mPhillData, "Hello"]);
  };
  const addHello4 = (e) => {
    e.preventDefault();
    setPHDData([...phdData, "Hello"]);
  };
  const addHello5 = (e) => {
    e.preventDefault();
    setPostDData([...postDData, "Hello"]);
  };
  return (
    <>
      <hr />
      <p>
        <b>Higher Secondary / Class 12th</b>
      </p>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Country
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Education Mode
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          School
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
          Board
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
          Passing Year
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
        <label htmlFor="validationCustom04" className="form-label">
          Division
        </label>
        <select className="form-select" id="validationCustom04" required="">
          <option selected="" disabled="" value="">
            Choose...
          </option>
          <option>...</option>
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom03" className="form-label">
          % Aggregate Marks
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          required=""
        />
        <div className="invalid-feedback">Please provide your email.</div>
      </div>
      <hr />

      {gradData.map(() => {
        return (
          <>
            <p>
              <b>Graduate</b>
            </p>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Education Mode
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                University / Institute
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
                College Name
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
                Graduation Year
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
                Course Name
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
                Area
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
              <label htmlFor="validationCustom04" className="form-label">
                Division
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                % Aggregate Marks
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
            <br />
            <br />
          </>
        );
      })}
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={addHello1}>
          Add More
        </button>
      </div>
      <hr />
      {postGradData.map(() => {
        return (
          <>
            <p>
              <b>Post Graduate</b>
            </p>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Education Mode
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                University / Institute
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
                College Name
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
                Graduation Year
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
                Course Name
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
                Area
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
              <label htmlFor="validationCustom04" className="form-label">
                Division
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                % Aggregate Marks
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
          </>
        );
      })}
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={addHello2}>
          Add More
        </button>
      </div>
      <hr />

      {mPhillData.map(() => {
        return (
          <>
            <p>
              <b>M Phil</b>
            </p>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Education Mode
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                University / Institute
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
                College Name
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
                Graduation Year
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
                Area
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
              <label htmlFor="validationCustom04" className="form-label">
                Division
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                % Aggregate Marks
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <div className="invalid-feedback">Please provide your email.</div>
            </div>
          </>
        );
      })}
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={addHello3}>
          Add More
        </button>
      </div>
      <hr />

      {phdData.map(() => {
        return (
          <>
            <p>
              <b>Ph.D</b>
            </p>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Education Mode
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                University / Institute
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
                College Name
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
                Completion Year
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
                Area
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <div className="invalid-feedback">Please provide your email.</div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom04" className="form-label">
                If pursuing, teaching experience during PhD
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pdhteaching"
                  value="phdteachingeyes"
                  id="phdteachingeyes"
                />
                <label className="form-check-label" htmlFor="phdteachingeyes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="pdhteaching"
                  value="phdteachingeno"
                  id="phdteachingeno"
                />
                <label className="form-check-label" htmlFor="phdteachingeno">
                  No
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                Anticipated Completion Year
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <div className="invalid-feedback">Please provide your email.</div>
            </div>
          </>
        );
      })}

      <div className="col-md-12">
        <button className="btn btn-primary" onClick={addHello4}>
          Add More
        </button>
      </div>
      <hr />
      {postDData.map(() => {
        return (
          <>
            <p>
              <b>Post Doctoral</b>
            </p>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom04" className="form-label">
                Education Mode
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                University / Institute
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
                College Name
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
                Graduation Year
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
                Course Name
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
                Area
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
              <label htmlFor="validationCustom04" className="form-label">
                Division
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                required=""
              >
                <option selected="" disabled="" value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationCustom03" className="form-label">
                % Aggregate Marks
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required=""
              />
              <br />
              <br />
              <div className="invalid-feedback">Please provide your email.</div>
            </div>
            <br />
            <br />
          </>
        );
      })}

      <div className="col-md-12">
        <button className="btn btn-primary" type="button" onClick={addHello5}>
          Add More
        </button>
      </div>
      <hr />
    </>
  );
};

export default PartThree;
