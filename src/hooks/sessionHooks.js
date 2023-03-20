import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import { ROUTES } from "../routes";
import { useLogin } from "./trackItApiHooks";
import { getCurrentUser } from "../utils/sessionUtils";

function useSession() {
  const { login } = useLogin();
  const [current] = useState(getCurrentUser());
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (user) {
      return;
    }

    if (!current && (pathname === ROUTES.login || pathname === ROUTES.signUp)) {
      return;
    }

    login(
      { email: current?.email, password: current?.password },
      (user) => {
        setUser(user);
        navigate(ROUTES.today);
      },
      () => {
        navigate(ROUTES.login);
      }
    );
  }, [current, login, setUser, user, navigate, pathname]);
}

export { useSession };
