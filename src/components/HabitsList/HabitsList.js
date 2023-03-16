import { HabitsListContainer } from "./styled";
import Habit from "./Habit";

export default function HabitsList({ habits }) {
  if (habits.length === 0) {
    return (
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    );
  }

  return (
    <HabitsListContainer>
      {habits.map((h) => (
        <Habit key={h.id} name={h.name} days={h.days} id={h.id} />
      ))}
    </HabitsListContainer>
  );
}
