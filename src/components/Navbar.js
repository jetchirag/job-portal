import React from "react";
import AuthContext from "../store/auth-context";

const Navbar = () => {
  const authCtx = React.useContext(AuthContext);
  function handleOnClick() {
    const element = document.getElementById('openings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        authCtx.isLoggedIn ? `` : `sticky-top`
      } navbar-light`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="http://172.17.101.106:3000/image/navbarlogo.jpeg"
            alt=""
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apply">
              Apply
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#openings" onClick={handleOnClick}>
              Openings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="/faq">
              FAQs
            </a>
          </li> */}

          {/* <li className="nav-item">
            <a className="nav-link" href="/admin">
              Admin
            </a>
          </li> */}
          <li className="nav-item">
            {authCtx.isLoggedIn && (
              <a className="nav-link" href="/logout">
                Logout
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
