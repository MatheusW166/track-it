import styled from "styled-components";

const CustomButtonStyle = styled.button`
  background: ${({ theme, secondary }) =>
    secondary ? theme.overAccent : theme.accent};
  color: ${({ theme, secondary }) =>
    secondary ? theme.accent : theme.overAccent};
  border-radius: 5px;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  max-width: 400px;
  &:disabled {
    background: ${({ theme }) => theme.accentOpacity};
  }
  .loader {
    width: 13px;
    height: 13px;
  }
`;

export default CustomButtonStyle;
