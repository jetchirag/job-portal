import React from 'react';
import WhyUS from './WhyUS2';
const WhyUs = () => {
  return (
    <div>
      <div className='whyus'>
        <h2>Why work @ Manipal</h2>
        <div
          id='carouselExampleCaptions'
          className='carousel slide sliding'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='upperlayer'>
              <h1>Manipal.</h1>
              <h3>
                The Manipal Education Group, with its heritage of excellence in
                higher education for over 60 years, launched Manipal University,
                Jaipur in 2011.
              </h3>
            </div>
            <div className='carousel-item active new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/whyus.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/whyus.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/whyus.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='whyus'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide sliding'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='upperlayer new-upper '>
              <h1>Jaipur.</h1>
              <h3>
                Jaipur is the capital of India’s Rajasthan state. It evokes the
                royal family that once ruled the region and that, in 1727,
                founded what is now called the Old City, or “Pink City” for its
                trademark building color.
              </h3>
            </div>
            <div className='carousel-item active new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/jaipur.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/jaipur.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item new-change'>
              <img
                src='https://hammerhead-app-qmja6.ondigitalocean.app/image/jaipur.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <WhyUS />
    </div>
  );
};

export default WhyUs;
