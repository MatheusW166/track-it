import styled from "styled-components";

const CustomButtonStyle = styled.button`
  background: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.accent};
  color: ${({ theme, secondary }) =>
    secondary ? theme.accent : theme.overAccent};
  border-radius: 5px;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  max-width: 400px;
  position: relative;
  &:disabled {
    background: ${({ theme, secondary }) => !secondary && theme.accentOpacity};
    opacity: ${({ secondary }) => secondary && "0.6"};
  }
  .loader {
    width: 13px;
    height: 13px;
  }
`;

export default CustomButtonStyle;
