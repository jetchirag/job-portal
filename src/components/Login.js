import React from "react";
import { useRef, useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";
import Modal from "./modal/Modal";

const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState();
  const handleClose = () => {
    setShow(false);
    navigate("/admin/dashboard");
  };

  async function submitHandler(e) {
    // setLoading(true);
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    try {
      const response = await fetch("http://172.17.101.106:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        let msg = "Check Registration ID and Password!";
        setError(msg);
        return;
      }
      const expTime = data.expiresIn;
      authCtx.login(data.token, expTime);
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {" "}
      <Modal
        handleClose={handleClose}
        show={show}
        title="Success"
        body="Your were logged in successfully 😃"
      />
      <div className="main-form-div">
        {error && <p>`${error.msg}`</p>}
        <div className="form-bg">
          <div className="img-muj">
            <img src="images/manipal-logo.png" alt="" />
          </div>
          <div className="line"></div>
          <div className="log-form">
            <form onSubmit={submitHandler}>
              <h3>Admin Portal</h3>
              <input
                type="text"
                placeholder="Enter Username"
                className="log-input"
                name="username"
                ref={userRef}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="log-input"
                name="password"
                ref={passRef}
              />
              <div className="btn-container">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Login
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
    </>
  );
};

export default Login;
