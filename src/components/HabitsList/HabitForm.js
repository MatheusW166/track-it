import { CustomInput } from "../../styled";
import CustomButton from "../CustomButton/CustomButton";
import WeekDaysButtons from "./WeekDaysButtons";
import { HabitContainerForm } from "./styled";

export default function HabitForm({ onSubmit, onCancel }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form["name"].value;
    const days = Array.from(form["day"])
      .filter((i) => i.checked)
      .map((i) => i.value);

    console.log({
      name,
      days,
    });

    if (onSubmit) {
      onSubmit(e);
    }
  }

  return (
    <HabitContainerForm onSubmit={handleSubmit}>
      <CustomInput name="name" placeholder="Nome do hábito" />
      <WeekDaysButtons />
      <div>
        <CustomButton onClick={onCancel} type="button" secondary>
          Cancelar
        </CustomButton>
        <CustomButton type="submit">Salvar</CustomButton>
      </div>
    </HabitContainerForm>
  );
}
