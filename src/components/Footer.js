import React from "react";
import { FaGithub } from "react-icons/fa";

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
                  src="http://172.17.101.106:3000/image/cardimage.png"
                  height="120"
                  alt=""
                  loading="lazy"
                />
              </div>

              <p className="text-center">Manipal University Jaipur</p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a
                    className="text-dark px-2"
                    href="https://www.instagram.com/jaipurmanipal/"
                  >
                    <i className="fa-brands fa-instagram fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark px-2"
                    href="https://www.facebook.com/manipal.university/"
                  >
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </a>
                </li>
                {/* <li>
                  <a className="text-dark ps-2" href="#!">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </a>
                </li>
                <li>
                  <a className="text-dark ps-2" href="#!">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Important Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="https://jaipur.manipal.edu" className="text-dark">
                    Manipal University Jaipur
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://jaipur.manipal.edu/muj/about-us.html"
                    className="text-dark"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="http://localhost:3001/admin" className="text-dark">
                    Admin
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Something
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
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
            </div> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase mb-4 ">Contact</h5>

              <ul className="list-unstyled ">
                <li>
                  <p>
                    <i className="fas fa-map-marker-alt pe-2 "></i>Manipal
                    University Jaipur
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-phone pe-2 "></i>0141-3999100
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-envelope pe-2 mb-0 "></i>
                    hr.muj@jaipur.manipal.edu
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ borderTop: "2px solid black" }}
        >
          © 2022 Manipal University,{" "}
          <a href="https://jaipur.manipal.edu">jaipur.manipal.edu</a>, Jaipur,
          Rajasthan 303007
        </div>
      </footer>
    </div>
  );
};

export default Footer;
