import styled from "styled-components";

const LoaderContainer = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  animation: flash 0.5s ease-out infinite alternate;

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
