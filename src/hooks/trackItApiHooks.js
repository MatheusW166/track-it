import { useState } from "react";
import trackItApi from "../services/trackItApiAdapter";

function useLogin() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const login = ({ email, password, token }) => {
    setLoading(true);
    trackItApi
      .logIn({ email, password, token })
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { user, loading, error, login };
}

export { useLogin };
