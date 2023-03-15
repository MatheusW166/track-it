import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { PageContainer } from "../../styled";
import HabitsList from "../../components/HabitsList/HabitsList";
import HabitForm from "../../components/HabitsList/HabitForm";

const habitos = [
  {
    id: 1,
    name: "Nome do hábito 1",
    days: [1, 3, 5],
  },
  {
    id: 2,
    name: "Nome do hábito 2",
    days: [1, 3, 4, 6],
  },
  {
    id: 3,
    name: "Nome do hábito 3",
    days: [1, 2, 3, 4],
  },
];

export default function Habits() {
  const [showRegisterHabit, setShowRegisterHabit] = useState(false);
  return (
    <PageContainer>
      <div className="title">
        <h2>Meus hábitos</h2>
        <CustomButton onClick={() => setShowRegisterHabit(true)}>
          +
        </CustomButton>
      </div>
      {showRegisterHabit && (
        <HabitForm onCancel={() => setShowRegisterHabit(false)} />
      )}
      <HabitsList habits={habitos} />
    </PageContainer>
  );
}
