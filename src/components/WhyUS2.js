import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/carousel.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const WhyUS2 = () => {
  const cardStyle = {
    width: '18rem',
    height: 'auto',
    marginBottom: '3rem',
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
    >
      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/1.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/2.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/3.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/4.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/6.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/7.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/8.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/9.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/10.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/12.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/14.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/15.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/16.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/17.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/18.png'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/19.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/20.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/21.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/22.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
      <div className='card why-cards' style={cardStyle}>
        <div className='card-img'>
          <img
            src='https://hammerhead-app-qmja6.ondigitalocean.app/image/23.jpg'
            alt=''
          />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
    </Carousel>
  );
};

export default WhyUS2;
