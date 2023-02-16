import React from "react";

const Submitted = () => {
  return (
    <>
      <div className="heading">
        <img
          src="http://172.17.101.106:3000/image/success.gif"
          alt=""
          srcset=""
          style={{ width: "250px" }}
        />
        <p style={{ color: "green" }}>Application Successfully Submitted</p>
        <p>Your application ID: dummyidrn</p>
        <p style={{ fontSize: "20px" }}>
          Go back to <a href="https://localhost:3001/">homepage</a> or explore{" "}
          <a href="https://jaipur.mainpal.edu">Manipal</a>
        </p>
      </div>
    </>
  );
};

export default Submitted;
