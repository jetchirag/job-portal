import React from "react";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="text-center text-lg-start text-dark">
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img
                  src="http://65.109.166.43:3000/image/cardimage.png"
                  height="120"
                  alt=""
                  loading="lazy"
                />
              </div>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, eum!
              </p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a className="text-dark px-2" href="#!">
                    <i className="fa-brands fa-instagram fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-dark px-2" href="#!">
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-dark ps-2" href="#!">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-dark ps-2" href="#!">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Teams</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Our team
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    India
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Something
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Members</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Our members
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase mb-4 ">Contact</h5>

              <ul className="list-unstyled ">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pe-2 "></i>Manipal
                    University, Jaipur
                  </p>
                </li>
                <li>
                  <p>
                  <i className="fas fa-phone pe-2 "></i>1800 1020 128
  
                   
                  </p>

                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope pe-2 mb-0 "></i>
                    contact@jaipur.manipal.edu
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ "border-top": "2px solid black" }}
        >
          © 2022 Manipal University, <a href="#">jaipur.manipal.edu</a>, Jaipur, Rajasthan
          303007
        </div>
      </footer>
    </div>
  );
};

export default Footer;
