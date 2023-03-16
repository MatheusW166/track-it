import { TodayHabitStyle } from "./styled";
import { BsCheckLg } from "react-icons/bs";
import { useMarkHabit } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function TodayHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  refreshToday,
}) {
  const user = useContext(UserContext);
  const { markHabit } = useMarkHabit();

  function onSuccess() {
    refreshToday();
  }

  function handleMarkHabit() {
    markHabit({ done, id, token: user?.token }, onSuccess);
  }

  function daysPhrase(days) {
    return (
      <span>
        {days} {days === 1 ? "dia" : "dias"}
      </span>
    );
  }

  return (
    <TodayHabitStyle
      record={currentSequence === highestSequence && done}
      done={done}
      key={id}>
      <div className="info">
        <h3>{name}</h3>
        <p>Sequência de dias: {daysPhrase(currentSequence)}</p>
        <p>Seu recorde: {daysPhrase(highestSequence)}</p>
      </div>
      <div className="check">
        <BsCheckLg onClick={handleMarkHabit} />
      </div>
    </TodayHabitStyle>
  );
}
