import { HabitsListContainer } from "./styled";
import Loader from "../Loader/Loader";
import Habit from "./Habit";

export default function HabitsList({
  habits,
  onSuccessDelete,
  loading = false,
}) {
  if (habits?.length === 0 && !loading) {
    return (
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    );
  }

  return (
    <HabitsListContainer>
      {loading ? (
        <Loader isDarker={true} />
      ) : (
        habits.map((h) => (
          <Habit
            onSuccessDelete={onSuccessDelete}
            key={h.id}
            name={h.name}
            days={h.days}
            id={h.id}
          />
        ))
      )}
    </HabitsListContainer>
  );
}
