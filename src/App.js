import ResetStyle from "./styles/resetStyle";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import { useState } from "react";
import UserContext from "./context/user";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={THEME}>
        <ResetStyle />
        <GlobalStyle />
        <BrowserRouter>
          <MyRoutes setUser={setUser} />
        </BrowserRouter>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
