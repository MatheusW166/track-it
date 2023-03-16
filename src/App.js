import ResetStyle from "./styles/resetStyle";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import { useState } from "react";
import UserContext from "./context/user";

function App() {
  const [user, setUser] = useState({
    id: 8350,
    name: "Matheus Wagners",
    image:
      "https://s2.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png",
    email: "matheuswagnerdossantos@outlook.com",
    password: "123123123",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODM1MCwiaWF0IjoxNjc4OTI5Nzk4fQ.E4S83sz2w2jJFNT4RZQdNWTy_OLBvbchhnkXGuMcjqE",
  });

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
