import React from 'react';

const Submitted = ({ id, setID }) => {
  return (
    <>
      <div className='heading'>
        <img
          src='https://hammerhead-app-qmja6.ondigitalocean.app/image/success.gif'
          alt=''
          srcSet=''
          style={{ width: '250px' }}
        />
        <p style={{ color: 'green' }}>Application Successfully Submitted</p>
        <p>Your application ID: {id.applyId}</p>
        <p style={{ fontSize: '20px' }}>
          Go back to <a href='https://manipaljaipurcareers.tech/'>homepage</a> or explore{' '}
          <a href='https://jaipur.mainpal.edu'>Manipal</a>
        </p>
      </div>
    </>
  );
};

export default Submitted;
