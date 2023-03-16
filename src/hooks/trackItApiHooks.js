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

function useListHabits({ token, onSuccess, onError }) {
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
      .then((data) => {
        data = data.reverse();
        setHabits(data);
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
  }, [token, onSuccess, onError]);

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

function useDeleteHabit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const deleteHabit = ({ id, token }, onSuccess, onError) => {
    setLoading(true);
    trackItApi
      .deleteHabit({ id, token })
      .then((data) => {
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

  return { loading, error, deleteHabit };
}

function useListToday({ token, onSuccess, onError, loadOnRefresh = true }) {
  const [today, setToday] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const refreshToday = useCallback(() => {
    if (!token) {
      return;
    }
    if (loadOnRefresh) {
      setLoading(true);
    }
    trackItApi
      .listToday({ token })
      .then((data) => {
        data = data.reverse();
        setToday(data);
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
  }, [token, onSuccess, onError, loadOnRefresh]);

  useEffect(() => {
    refreshToday();
  }, [refreshToday]);

  return { today, loading, error, setToday, refreshToday };
}

function useMarkHabit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const markHabit = ({ done, id, token }, onSuccess, onError) => {
    setLoading(true);
    const promise = !done
      ? trackItApi.markHabitDone
      : trackItApi.markHabitUndone;
    promise({ token, id })
      .then((data) => {
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

  return { loading, error, markHabit };
}

export {
  useLogin,
  useSignUp,
  useListHabits,
  useCreateHabit,
  useDeleteHabit,
  useListToday,
  useMarkHabit,
};
