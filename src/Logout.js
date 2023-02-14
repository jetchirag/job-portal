import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Modal from "./components/modal/Modal";

const Logout = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [show, setShow] = useState();
  const handleClose = () => {
    setShow(false);
    authCtx.logout();
    navigate("/admin");
  };
  useEffect(() => {
    setShow(true);
  });

  return (
    <>
      <Modal
        handleClose={handleClose}
        show={true}
        title="Logged Out"
        body="Your were logged out successfully"
      />
    </>
  );
};

export default Logout;
