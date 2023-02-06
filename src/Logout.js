import AuthContext from "./store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext,useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function logout() {
      try {
        const response = await fetch("http://localhost:3000/logout", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authCtx.token}`,
          },
        });
        const data = await response.json();
        if (data.error) {
          return console.log(data.error);
        }
        navigate("/");
      } catch (error) {}
    }
    logout();
  }, [authCtx]);
};

export default Logout;
