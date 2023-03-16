import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Habits from "./pages/Habits/Habits";
import History from "./pages/History/History";
import LogIn from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Today from "./pages/Today/Today";

const ROUTES = {
  login: "/",
  signUp: "/cadastro",
  habits: "/habitos",
  today: "/hoje",
  history: "/historico",
};

export { ROUTES };

export default function MyRoutes({ setUser, setToday, refreshToday }) {
  const { pathname } = useLocation();

  function isLoginOrSignUp() {
    return pathname === ROUTES.login || pathname === ROUTES.signUp;
  }

  return (
    <>
      {!isLoginOrSignUp() && <Header />}
      <Routes>
        <Route path={ROUTES.login} element={<LogIn setUser={setUser} />} />
        <Route path={ROUTES.signUp} element={<SignUp />} />
        <Route
          path={ROUTES.habits}
          element={<Habits refreshToday={refreshToday} />}
        />
        <Route path={ROUTES.today} element={<Today setToday={setToday} />} />
        <Route path={ROUTES.history} element={<History />} />
      </Routes>
      {!isLoginOrSignUp() && <Footer />}
    </>
  );
}
