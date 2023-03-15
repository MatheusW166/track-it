import styled from "styled-components";

const CustomButtonStyle = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.overAccent};
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
