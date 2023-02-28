import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Events = () => {
  return (
    <div>
      <div className='heading events'>
        <h2>News & Events @ Manipal</h2>
      </div>
      <div className='muj-events'>
        <div className='events-carasel'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://mujbioscope.in/assets/collage/20.jpg'
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://mujbioscope.in/assets/collage/21.jpg'
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://mujbioscope.in/assets/collage/20.jpg'
                alt='Third slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='side-events'>
          <div className='event-card'>
            <div className='img-cont'>
              <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
            </div>
            <div className='card-body'>
              <h3>Free health check up camp</h3>
              <p>To create awareness about Preventive Health check-ups.</p>
            </div>
          </div>

          <div className='event-card'>
            <div className='img-cont'>
              <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
            </div>
            <div className='card-body'>
              <h3>National Science Day celebrations 2023</h3>
              <p>To mark the discovery of the Raman effect.</p>
            </div>
          </div>
          <div className='event-card'>
            <div className='img-cont'>
              <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
            </div>
            <div className='card-body'>
              <h3>Comming Up 4kn Marathon In Jaipur.</h3>
              <p>Athletes of all levels are encouraged to participate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
