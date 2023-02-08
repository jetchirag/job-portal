import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    authCtx.logout();
    
    navigate("/admin");
  }, [authCtx]);
};

export default Logout;
