import React, { useState } from 'react';
import './sort.css';
import { facultiesList, list } from './form/faculties'

const Sort = () => {
  const [fac, setFac] = useState('');
  const [dep, setDep] = useState('');

  return (
    <div className='sortmain'>
      <div className='suggestions'>
        <div className='sugg'>Teaching</div>
        <div className='sugg'>Research</div>
        <div className='sugg'>Part-Time</div>
        <div className='sugg'>Full-Time</div>
        <div className='sugg'>PhD</div>
        <div className='sugg'>Teaching</div>
        <div className='sugg'>Research</div>
        <div className='sugg'>Part-Time</div>
        <div className='sugg'>Full-Time</div>
      </div>
      <hr />
      <div className='realsort'>
        <div className='col-md-2'>
          <select
            className='form-select'
            id='validationCustom04'
            required
            onChange={(e) => {
              setFac(e.target.value);
            }}
          >
            <option selected disabled value=''>
              Faculty
            </option>
            {list.map((faculty) => {
              return <option>{faculty}</option>;
            })}
          </select>
          <div className='invalid-feedback'>Please select a valid state.</div>
        </div>
        <div className='col-md-2'>
          <select
            className='form-select'
            id='validationCustom04'
            required
            onChange={(e) => {
              setDep(e.target.value);
            }}
          >
            <option selected disabled value=''>
              School
            </option>
            {fac &&
              Object.keys(facultiesList[fac]).map((dept) => {
                return <option>{dept}</option>;
              })}
          </select>
          <div className='invalid-feedback'>Please select a valid state.</div>
        </div>
        <div className='col-md-2'>
          <select className='form-select' id='validationCustom04' required>
            <option selected disabled value=''>
              Department
            </option>
            {dep &&
              facultiesList[fac][dep].map((dept) => {
                return <option>{dept}</option>;
              })}
          </select>
          <div className='invalid-feedback'>Please select a valid state.</div>
        </div>
        <div className='col-md-2'>
          <select className='form-select' id='validationCustom04' required>
            <option selected disabled value=''>
              Type
            </option>
            <option>Academic</option>
            <option>Non-Academic</option>
            <option>Administrative</option>
          </select>
          <div className='invalid-feedback'>Please select a valid state.</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sort;
