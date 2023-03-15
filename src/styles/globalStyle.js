import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        font-family: "Lexend Deca", sans-serif;
        color: ${({ theme }) => theme.textPrimary};
        background-color: red;
    }
`;

export default GlobalStyle;
