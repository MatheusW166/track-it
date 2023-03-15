import { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../components/CustomButton/CustomButton";
import RegisterHabit from "../../components/RegisterHabit/RegisterHabit";

const PageContainer = styled.main`
  min-height: 100vh;
  padding: calc(70px + 24px) 18px;
  background: ${({ theme }) => theme.bgVariant};

  p {
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
  }
`;

export default function Habits() {
  const [showRegisterHabit, setShowRegisterHabit] = useState(false);
  return (
    <PageContainer>
      <div className="title">
        <h2>Meus hábitos</h2>
        <CustomButton onClick={() => setShowRegisterHabit(!showRegisterHabit)}>
          +
        </CustomButton>
      </div>
      {showRegisterHabit && <RegisterHabit />}
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </PageContainer>
  );
}
