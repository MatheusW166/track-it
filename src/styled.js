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
  max-width: 400px;
  margin: 0 auto;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 45px;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: 5px;
  padding: 0 11px;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 20px;
  }
  &:disabled {
    background: ${({ theme }) => theme.input.disabled.bg};
    color: ${({ theme }) => theme.input.disabled.text};
  }
`;

const PageContainer = styled.main`
  min-height: 100vh;
  padding: calc(70px + 24px) 18px;
  background: ${({ theme }) => theme.bgVariant};

  display: flex;
  flex-direction: column;

  & > p {
    margin-top: 28px;
    font-size: 18px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 22px;
      font-weight: 400;
      color: ${({ theme }) => theme.accentVariant};
    }
    button {
      width: 40px;
      height: 35px;
      font-size: 26px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      h3 {
        font-weight: 400;
        color: ${({ theme, percent }) =>
          percent === 0 ? theme.subtitle : theme.taskDone};
      }
    }
  }
`;

export { PageContainer, CustomForm, CustomInput, RegisterContainer };
