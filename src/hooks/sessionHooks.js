import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { useLogin } from "./trackItApiHooks";
import { getCurrentUser } from "../utils/sessionUtils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

function useSession() {
  const { login } = useLogin();
  const [current] = useState(getCurrentUser());
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (user || !current) {
      return;
    }

    login(
      { email: current.email, password: current.password },
      (user) => setUser(user),
      () => setUser(null)
    );
  }, [current, login, setUser, user]);
}

function useRedirectUnlogged() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || getCurrentUser()) {
      return;
    }

    navigate(ROUTES.login);
  }, [user, navigate]);
}

export { useSession, useRedirectUnlogged };
