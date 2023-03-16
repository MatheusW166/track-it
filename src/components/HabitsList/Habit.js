/* eslint-disable no-restricted-globals */
import WeekDaysButtons from "./WeekDaysButtons";
import { HabitContainer } from "./styled";
import { BsTrash } from "react-icons/bs";
import { useDeleteHabit } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function Habit({ name, days, id, onDelete }) {
  const { deleteHabit } = useDeleteHabit();
  const user = useContext(UserContext);

  function onError(err) {
    alert(err?.response?.data?.message || "Não foi possível deletar o hábito.");
  }

  function onSuccess() {
    if (onDelete) {
      onDelete();
    }
  }

  function handleDelete() {
    if (!confirm("Deseja deletar o hábito?")) {
      return;
    }
    deleteHabit({ id, token: user?.token }, onSuccess, onError);
  }

  return (
    <HabitContainer>
      <BsTrash onClick={handleDelete} />
      <h3>{name}</h3>
      <WeekDaysButtons days={days} />
    </HabitContainer>
  );
}
