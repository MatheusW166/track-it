import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user";
import { ROUTES } from "../routes";
import { useLogin } from "./trackItApiHooks";
import { getCurrentUser } from "../utils/sessionUtils";

function useSession() {
  const { login } = useLogin();
  const [current] = useState(getCurrentUser());
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (!current || user) {
      return;
    }
    const { email, password } = current;
    login(
      { email, password },
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
