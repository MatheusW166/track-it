import styled from "styled-components";

const RegisterContainer = styled.main`
  background: ${({ theme }) => theme.bg};
  min-height: 100vh;
  padding: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 32px 0;
  }

  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.accent};
    text-decoration: underline;
    font-size: 14px;
  }
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const CustomInput = styled.input`
  height: 45px;
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: 5px;
  padding: 0 11px;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 20px;
  }
  &:disabled {
    background: ${({ theme }) => theme.input.disabled.bg};
    color: ${({ theme }) => theme.input.disabled.bg};
  }
`;

export { CustomForm, CustomInput, RegisterContainer };
