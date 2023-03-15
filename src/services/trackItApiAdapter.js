import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const trackItApi = {
  signUp: async ({ email, name, image, password }) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/sign-up`, {
        email,
        name,
        image,
        password,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  logIn: async ({ email, password, token }) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  createHabit: async ({ name, days, token }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/habits`,
        {
          name,
          days,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  listHabits: async ({ token }) => {
    try {
      const res = await axios.get(`${BASE_URL}/habits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  deleteHabit: async ({ token, id }) => {
    try {
      const res = await axios.delete(`${BASE_URL}/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  listToday: async ({ token }) => {
    try {
      const res = await axios.get(`${BASE_URL}/habits/today`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  markHabitDone: async ({ token, id }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/habits/${id}/check`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  markHabitUndone: async ({ token, id }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/habits/${id}/uncheck`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  dailyHistory: async ({ token }) => {
    try {
      const res = await axios.get(`${BASE_URL}/habits/history/daily`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  },
};

export default trackItApi;
