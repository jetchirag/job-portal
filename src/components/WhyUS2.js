import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/carousel.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const WhyUS2 = () => {
  const cardStyle = {
    width: "18rem",
    height: "auto",
    marginBottom: "3rem"
  }
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
    >
      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/19.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/12.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/14.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/15.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/17.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/18.png' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/20.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/21.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/22.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/23.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/7.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/8.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/9.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/10.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/1.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/2.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/3.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>

      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/4.jpg' alt='' />
        </div>
        {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
      </div>
      <div className='card why-cards' style={cardStyle} >
        <div className='card-img'>
          <img src='https://mujbioscope.in/assets/collage/6.jpg' alt='' />
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
