import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        {/* <div className="upperlayer">
          <h1>MUJ</h1>
          <h1>Job</h1>
          <h1>Portal</h1>
        </div> */}
        <div className="upperlayer-car">
          <h3 className="text-center">
            <b>Carreers @ MUJ</b>
          </h3>
        </div>
        <div className="carousel-item active">
          <img
            src="http://172.17.101.106:3000/image/carousel8.jpg"
            className="d-block w-100 muj-main-img"
            alt="..."
          />
          {/* <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
        </div>
        <div className="carousel-item">
          <img
            src="http://172.17.101.106:3000/image/carousel111.jpg"
            className="d-block w-100 muj-main-img"
            alt="..."
          />
          {/* <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div className="carousel-item">
          <img
            src="http://172.17.101.106:3000/image/carousel7.jpg"
            className="d-block w-100 muj-main-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://172.17.101.106:3000/image/carousel112.jpeg"
            className="d-block w-100 muj-main-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://172.17.101.106:3000/image/carousel113.jpg"
            className="d-block w-100 muj-main-img"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
