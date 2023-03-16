import WeekDaysButtons from "./WeekDaysButtons";
import { HabitContainer } from "./styled";

export default function Habit({ name, days, id }) {
  console.log(id);
  return (
    <HabitContainer>
      <h3>{name}</h3>
      <WeekDaysButtons days={days} />
    </HabitContainer>
  );
}
