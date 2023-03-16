import { CustomInput } from "../../styled";
import CustomButton from "../CustomButton/CustomButton";
import WeekDaysButtons from "./WeekDaysButtons";
import { HabitContainerForm } from "./styled";
import { useCreateHabit } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function HabitForm({
  habitForm,
  setHabitForm,
  onSuccess,
  onError,
  onCancel,
}) {
  const { loading, createHabit } = useCreateHabit();
  const user = useContext(UserContext);

  function validateDays(days) {
    if (days.length === 0) {
      alert("Escolha algum dia.");
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form["name"].value;
    const days = Array.from(form["day"])
      .filter((i) => i.checked)
      .map((i) => i.value);

    if (!validateDays(days)) {
      return;
    }

    createHabit({ name, days, token: user.token }, onSuccess, onError);
  }

  return (
    <HabitContainerForm onSubmit={handleSubmit}>
      <CustomInput
        required
        disabled={loading}
        onChange={(e) => setHabitForm({ ...habitForm, name: e.target.value })}
        value={habitForm.name}
        name="name"
        placeholder="Nome do hábito"
      />
      <WeekDaysButtons
        disabled={loading}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (e.target.checked) {
            setHabitForm({
              ...habitForm,
              days: [...habitForm.days, value],
            });
          } else {
            setHabitForm({
              ...habitForm,
              days: [...habitForm.days.filter((d) => d !== value)],
            });
          }
        }}
        readOnly={false}
        days={habitForm.days}
      />
      <div>
        <CustomButton
          showLoading={false}
          disabled={loading}
          onClick={onCancel}
          type="button"
          secondary>
          Cancelar
        </CustomButton>
        <CustomButton disabled={loading} type="submit">
          Salvar
        </CustomButton>
      </div>
    </HabitContainerForm>
  );
}
