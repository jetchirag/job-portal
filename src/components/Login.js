import React from "react";
import Button from "./Button";

const Login = () => {
  return (
    <div className="main-form-div">
      <div className="form-bg">
        <div className="img-muj">
          <img src="images/manipal-logo.png" alt="" />
        </div>
        <div className="line"></div>
        <div className="log-form">
          <form action="http://65.109.166.43:3000/login" method="post">
            <h3>Admin Portal</h3>
            <input
              type="text"
              placeholder="Enter Username"
              className="log-input"
              name="username"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="log-input"
              name="password"
            />
            <div className="btn-container">
              <button type="submit" className="btn">Login
                {/* <a href="/admin/dashboard">Log In</a> */}
              </button>
              {/* <button type="button" className="btn">
                Forgot Password?
              </button>
              <Button color={'yellow'} text={'forgot password'} /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
