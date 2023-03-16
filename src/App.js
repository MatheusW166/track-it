import ResetStyle from "./styles/resetStyle";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import { useState } from "react";
import UserContext from "./context/user";
import TodayContext from "./context/today";
import { useListToday } from "./hooks/trackItApiHooks";

function App() {
  const [user, setUser] = useState();
  const { today, setToday, refreshToday } = useListToday({
    token: user?.token,
  });

  return (
    <TodayContext.Provider value={today}>
      <UserContext.Provider value={user}>
        <ThemeProvider theme={THEME}>
          <ResetStyle />
          <GlobalStyle />
          <BrowserRouter>
            <MyRoutes
              refreshToday={refreshToday}
              setToday={setToday}
              setUser={setUser}
            />
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </TodayContext.Provider>
  );
}

export default App;
