import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import { ROUTES } from "../routes";
import { useLogin } from "./trackItApiHooks";

function useSession() {
  const { login } = useLogin();
  const [current] = useState(JSON.parse(localStorage.getItem("current")));
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      return;
    }
    if (!current) {
      return;
    }
    console.log("use session");
    login(
      { email: current.email, password: current.password },
      (user) => {
        setUser(user);
        navigate(ROUTES.today);
      },
      () => {
        navigate(ROUTES.login);
      }
    );
  }, [current, login, setUser, user, navigate]);
}

export { useSession };
