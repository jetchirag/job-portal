import React from "react";

const WhyUs = () => {
  return (
    <div>
      <div className="whyus">
        <h2>Why work @ Manipal</h2>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="upperlayer">
              <h1>Manipal.</h1>
              <h3>
                The Manipal Education Group, with its heritage of excellence in
                higher education for over 60 years, launched Manipal University,
                Jaipur in 2011.
              </h3>
            </div>
            <div className="carousel-item active">
              <img src="http://65.109.166.43:3000/image/whyus.jpg" className="d-block w-100" alt="..." />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img src="http://65.109.166.43:3000/image/whyus.jpg" className="d-block w-100" alt="..." />
              
            </div>
            <div className="carousel-item">
              <img src="http://65.109.166.43:3000/image/whyus.jpg" className="d-block w-100" alt="..." />
              
            </div>
          </div>
        </div>
      </div>
      <div className="whyus">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="upperlayer">
              <h1>Jaipur.</h1>
              <h3>
                Jaipur is the capital of India’s Rajasthan state. It evokes the
                royal family that once ruled the region and that, in 1727,
                founded what is now called the Old City, or “Pink City” for its
                trademark building color.
              </h3>
            </div>
            <div className="carousel-item active">
              <img src="http://65.109.166.43:3000/image/jaipur.jpg" className="d-block w-100" alt="..." />
              
            </div>
            <div className="carousel-item">
              <img src="http://65.109.166.43:3000/image/jaipur.jpg" className="d-block w-100" alt="..." />
              
            </div>
            <div className="carousel-item">
              <img src="http://65.109.166.43:3000/image/jaipur.jpg" className="d-block w-100" alt="..." />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
