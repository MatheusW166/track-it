import { useContext, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { PageContainer } from "../../styled";
import HabitsList from "../../components/HabitsList/HabitsList";
import HabitForm from "../../components/HabitsList/HabitForm";
import { useListHabits } from "../../hooks/trackItApiHooks";
import UserContext from "../../context/user";

const defaultForm = { name: "", days: [] };

export default function Habits({ refreshToday }) {
  const user = useContext(UserContext);
  const [habitForm, setHabitForm] = useState(defaultForm);
  const [showRegisterHabit, setShowRegisterHabit] = useState(false);
  const { habits, loading, refreshHabits } = useListHabits({
    token: user?.token,
  });

  function onError(err) {
    console.log(err);
    const errorMessage = err?.response?.data?.message;
    alert(errorMessage || "Não foi possível salvar o hábito.");
  }

  function onSuccess() {
    setHabitForm(defaultForm);
    setShowRegisterHabit(false);
    refreshHabits();
    refreshToday();
  }

  function onSuccessDelete() {
    refreshHabits();
    refreshToday();
  }

  return (
    <PageContainer>
      <div className="title">
        <h2>Meus hábitos</h2>
        <CustomButton onClick={() => setShowRegisterHabit(true)}>
          +
        </CustomButton>
      </div>
      {showRegisterHabit && (
        <HabitForm
          onError={onError}
          onSuccess={onSuccess}
          habitForm={habitForm}
          setHabitForm={setHabitForm}
          onCancel={() => setShowRegisterHabit(false)}
        />
      )}
      <HabitsList
        loading={loading}
        onSuccessDelete={onSuccessDelete}
        habits={habits}
      />
    </PageContainer>
  );
}
