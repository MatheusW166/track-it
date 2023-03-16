import { useCallback, useEffect, useState } from "react";
import trackItApi from "../services/trackItApiAdapter";

function useLogin() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const login = ({ email, password }, onSuccess, onError) => {
    setLoading(true);
    trackItApi
      .logIn({ email, password })
      .then((data) => {
        setUser(data);
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((err) => {
        setError(err);
        if (onError) {
          onError(err);
        }
      })
      .finally(() => setLoading(false));
  };

  return { user, loading, error, login };
}

function useSignUp() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const signUp = ({ email, password, name, image }, onSuccess, onError) => {
    setLoading(true);
    trackItApi
      .signUp({ email, name, image, password })
      .then((res) => {
        setResponse(res);
        if (onSuccess) {
          onSuccess(res);
        }
      })
      .catch((err) => {
        setError(err);
        if (onError) {
          onError(err);
        }
      })
      .finally(() => setLoading(false));
  };

  return { response, loading, error, signUp };
}

function useListHabits({ token }) {
  const [habits, setHabits] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const refreshHabits = useCallback(() => {
    if (!token) {
      return;
    }
    setLoading(true);
    trackItApi
      .listHabits({ token })
      .then((data) => setHabits(data.reverse()))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    refreshHabits();
  }, [refreshHabits]);

  return { habits, loading, error, refreshHabits };
}

function useCreateHabit() {
  const [habit, setHabit] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const createHabit = ({ name, days, token }, onSuccess, onError) => {
    setLoading(true);
    trackItApi
      .createHabit({ name, days, token })
      .then((data) => {
        setHabit(data);
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((err) => {
        setError(err);
        if (onError) {
          onError(err);
        }
      })
      .finally(() => setLoading(false));
  };

  return { habit, loading, error, createHabit };
}

export { useLogin, useSignUp, useListHabits, useCreateHabit };
