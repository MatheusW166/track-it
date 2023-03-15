import ResetStyle from "./styles/resetStyle";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
