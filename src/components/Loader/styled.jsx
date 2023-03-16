import styled from "styled-components";

const LoaderContainer = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: ${({ isDarker }) => (isDarker ? "flashDarker" : "flash")} 0.5s
    ease-out infinite alternate;

  @keyframes flashDarker {
    0% {
      background-color: #86868621;
      box-shadow: 32px 0 #68686821, -32px 0 #5c5c5c;
    }
    50% {
      background-color: #5c5c5c;
      box-shadow: 32px 0 #72727221, -32px 0 #72727221;
    }
    100% {
      background-color: #72727221;
      box-shadow: 32px 0 #5c5c5c, -32px 0 #72727221;
    }
  }

  @keyframes flash {
    0% {
      background-color: #fff2;
      box-shadow: 32px 0 #fff2, -32px 0 #fff;
    }
    50% {
      background-color: #fff;
      box-shadow: 32px 0 #fff2, -32px 0 #fff2;
    }
    100% {
      background-color: #fff2;
      box-shadow: 32px 0 #fff, -32px 0 #fff2;
    }
  }
`;

export default LoaderContainer;
