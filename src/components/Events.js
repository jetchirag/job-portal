import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Events = () => {
  return (
    <div>
      <div className='heading'>
        <h1>News & Events @Manipal</h1>
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
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                dolorum blanditiis ea. Animi, perferendis est?
              </p>
            </div>
          </div>
          <div className='event-card'>
            <div className='img-cont'>
              <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
            </div>
            <div className='card-body'>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                dolorum blanditiis ea. Animi, perferendis est?
              </p>
            </div>
          </div>
          <div className='event-card'>
            <div className='img-cont'>
              <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
            </div>
            <div className='card-body'>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                dolorum blanditiis ea. Animi, perferendis est?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
