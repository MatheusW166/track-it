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

  function addDay(day) {
    setHabitForm({
      ...habitForm,
      days: [...habitForm.days, day],
    });
  }

  function removeDay(day) {
    setHabitForm({
      ...habitForm,
      days: [...habitForm.days.filter((d) => d !== day)],
    });
  }

  return (
    <HabitContainerForm
      data-test="habit-create-container"
      onSubmit={handleSubmit}>
      <CustomInput
        required
        disabled={loading}
        onChange={(e) => setHabitForm({ ...habitForm, name: e.target.value })}
        value={habitForm.name}
        name="name"
        placeholder="Nome do hábito"
        data-test="habit-name-input"
      />
      <WeekDaysButtons
        disabled={loading}
        onChange={(e) => {
          const value = Number(e.target.value);
          const isChecked = e.target.checked;
          if (isChecked) {
            addDay(value);
          } else {
            removeDay(value);
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
          secondary
          dataTest="habit-create-cancel-btn">
          Cancelar
        </CustomButton>
        <CustomButton
          dataTest="habit-create-save-btn"
          disabled={loading}
          type="submit">
          Salvar
        </CustomButton>
      </div>
    </HabitContainerForm>
  );
}
