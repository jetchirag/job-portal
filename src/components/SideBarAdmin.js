import React from "react";
import AuthContext from "../store/auth-context";

const SideBarAdmin = () => {
  const authCtx = React.useContext(AuthContext);
  return (

    <nav
      className="navbar navbar-expand-lg navbar-light"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://hammerhead-app-qmja6.ondigitalocean.app/image/cardimage.png"
            alt=""
            className="d-inline-block align-text-top"
            style={{width: "3rem"}}
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
            <a className="nav-link active" aria-current="page" href="/admin/dashboard">
              Admin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Graphs
            </a>
          </li>
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

export default SideBarAdmin;
